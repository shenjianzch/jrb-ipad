/*
 * @Description: 
 * @Date: 2019-01-09 14:39:32
 * @LastEditors: Summer
 * @LastEditTime: 2019-01-16 15:24:48
 */
import request from './js/fetch';

export function getfinance() {
  return request({
    url: '/finance',
    method: 'get'
  });
}

export function shopfunds(data, method, id) {
  let midd = {},
    url = '/shop/funds_items';
  switch (method) {
    case 'get':
      midd.params = data;
      break;
    case 'post':
      midd.data = data;
      break;
    case 'put':
      midd.data = data;
      url = url + '/' + id;
      break;
  }
  return request(Object.assign(midd, { url, method }));
}

export function shopadjustb(data, method = 'post') {
  return request({
    url: '/shop/adjust_balance',
    method,
    data
  });
}

export function shoprecharge(data, method = 'post') {
  return request({
    url: '/finance/recharge',
    method,
    data
  });
}

export function shopadjustbb(data) {
  return request({
    url: '/shop/adjust_balance',
    method: 'get',
    params: data
  });
}

export function financeVerfy(data = {}, method = 'get') {
  const obj = {
    url: '/exhibition/sale_order/check_goods',
    method
  };
  if (method == 'get') {
    Object.assign(obj, { params: data });
  } else {
    Object.assign(obj, { data });
  }
  console.log(obj, '核销');
  return request(obj);
}
//获取账户余款 定金等信息
export function getCustomerPayInfo(id) {
  return request({
    url: '/finance/customersummary/' + id,
    method: 'get'
  })
}

//获取供应商summary 
export function supplier_account_summary(params) {
  return request({
    url: '/finance/supplier_account_summary',
    method: 'get',
    params
  })
}

//获取发货历史 
export function getHistoryList(params) {
  console.log(params, 'params')
  return request({
    url: '/exhibition/sale_order',
    method: 'get',
    params
  })
}
// 获取客户订单日志
export function getOrderlogs(form) {
  return request({
    url: `/order_track/customer/${form.id}/order_logs`
  })
}
export function payment_prompt_list(params) {
  return request({
    url: '/sale/payment_prompt_list',
    method: 'get',
    params
  });
}
export function customer_account_summary(params) {
  return request({
    url: '/finance/customer_account_summary',
    method: 'get',
    params
  });
}