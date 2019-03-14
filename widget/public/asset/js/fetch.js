import axios from 'axios';
import qs from 'qs';
import { Message } from 'element-ui';
import Cookies from 'js-cookie';
import store from 'store/app';
import router from 'component/member/router';

const service = axios.create({
  baseURL: serverUrl, // api的base_url
  timeout: 30000, // request timeout
  withCredentials: true
});

// POST传参序列化(添加请求拦截器)
service.interceptors.request.use(
  config => {
    // 在发送请求之前做某件事
    config.headers['x-csrf-token'] = Cookies.get('csrfToken');
    config.headers['X-Requested-With'] = 'XMLHttpRequest';
    // 这里还要判断下 是否是pad 如果是pad 就带上不然就无视了 走session机制 不走token
    config.headers['pad-token'] = localStorage.getItem('hmt-pad-token');
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
// 返回状态判断(添加响应拦截器)
service.interceptors.response.use(
  res => {
    // 对响应数据做些事
    if (res.data.hasOwnProperty('login') && !res.data.login) {
      // 服务器=》已登出
      router.push('/login');
      return Promise.reject(res);
    }
    return res;
  },
  error => {
    const { status, data = {} } = error.response;
    let msg = '';
    if (status === 401) {
      msg = '已登出';
      router.push('/login');
    } else {
      const { error } = data.message || {};
      console.log(data.message);
      switch (true) {
        case error === 'invalid_grant':
          msg = '密码错误';
          break;
        case error === undefined:
          msg = '服务器错误';
          break;
        default:
          msg = error;
      }
    }
    // 已经token 过期了
    Message({
      type: 'error',
      message: msg
    });
    store.commit('changeLoading', false);
    return Promise.reject(error);
  }
);

export default service;
