import request from './js/fetch';
// const m = '/manage'
export function getCategory(query = null) {
  return request({
    url: '/category',
    method: 'get',
    params: query
  });
}

export function getCategoryById(id) {
  return request({
    url: `/category/${id}`,
    method: 'get'
  });
}

export function getCategoryProps(id) {
  return request({
    url: `/category/${id}/props`,
    method: 'get'
  });
}

export function getPropValues(id, pid) {
  return request({
    url: `/category/${id}/props/${pid}`,
    method: 'get'
  });
}

// 分类下拉列表
export function getCategoryDroplist() {
  return request({
    url: '/category/drop_list',
    method: 'get'
  });
}

//  创建获取自定义类目
export function getCreateCategory(data, method = 'get') {
  return request({
    url: '/category_custom',
    method,
    data
  });
}
