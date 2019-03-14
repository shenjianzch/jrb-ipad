/*
 * @Description:
 * @Date: 2019-01-16 15:41:25
 * @LastEditors: Summer
 * @LastEditTime: 2019-01-22 14:08:56
 */
'use strict';

import request from './js/fetch';
// 获取店员列表
export function getEmplyeeList(params) {
  return request({
    method: 'get',
    url: '/employee/list',
    params
  });
}

// sku 查询商品
export function searchGoodBySku(obj, shopid) {
  return request({
    method: 'get',
    url: `/shop/${shopid}/quick_goods_by_sku`,
    params: obj
  });
}

// 废弃服务单
export function deleteorder(orderno) {
  return request({
    url: '/agent/deleteorder/' + orderno,
    method: 'delete'
  });
}
// 获取客户等级
export function getgrade(params = {}) {
  return request({
    method: 'get',
    url: '/customer/grade',
    params
  });
}

// 获取设置过的支付方式
export function getPayMethods() {
  return request({
    url: '/shop/payment_items',
    method: 'get'
  });
}

// 获取人员账户
export function getPaymentPerson(obj) {
  return request({
    url: '/shop/payment_unit',
    method: 'get',
    params: obj
  });
}

// 获取订单支付列表
export function getOrderPayInfo(orderNo) {
  return request({
    url: `/order/${orderNo}/pay`,
    method: 'get'
  });
}
// 创建支付信息
export function postPayInfo(orderNo, data) {
  return request({
    url: `/order/${orderNo}/pay`,
    method: 'post',
    data
  });
}
// 更新支付信息
export function putPayInfo(orderNo, id, data) {
  return request({
    url: `/order/${orderNo}/pay/${id}`,
    method: 'put',
    data
  });
}
// 删除支付信息
export function delPayInfo(orderNo, id) {
  return request({
    url: `/order/${orderNo}/pay/${id}`,
    method: 'delete'
  });
}

// 审核销售下的订单
export function auditOrder(obj) {
  return request({
    url: '/exhibition/audit_agent_order',
    method: 'post',
    data: obj
  });
}

// 获取订货单列表
export function getAgentOrder(obj) {
  return request({
    url: '/exhibition/agent_order',
    method: 'get',
    params: obj
  });
}

// 获取订货单列表
export function getPurchaseOrder(obj) {
  return request({
    url: '/purchase_order',
    method: 'get',
    params: obj
  });
}

// 获取销售单列表
export function getSaleOrder(obj) {
  return request({
    url: '/exhibition/sale_order',
    method: 'get',
    params: obj
  });
}

// 获取供应商的已经订货的单的数据
export function factoryGetSupplierData(obj) {
  return request({
    url: '/bundle/reserve_bind',
    method: 'get',
    params: obj
  });
}

// 获取客户列表
export function getCustomerList(params) {
  return request({
    url: '/agent/exhibitionoption',
    method: 'get',
    params
  });
}
// 获取员工列表
export function getEmployeeList(params) {
  console.log(params, 'getCustomerList');
  return request({
    url: '/wholesaling_employee/drop_list',
    method: 'get',
    params
  });
}

// 过账审核列表
export function getPostingPayment(data) {
  return request({
    url: '/order_payment',
    method: 'get',
    params: data
  });
}

// 过账审核操作
export function postPostingPayment(id, data) {
  return request({
    url: `/order/pay/${id}/check`,
    method: 'post',
    data
  });
}
// 财务模块 客户的订单详情汇总

export function getOrderTracking(id) {
  return request({
    url: `/order_track/customer/${id}/processing`,
    method: 'get'
  });
}
// 催款单
export function postPropmt(data) {
  return request({
    url: '/sale/payment_prompt_list',
    method: 'post',
    data
  });
}
// 客户总共的催款汇总
export function customerPropmtTotal(id) {
  return request({
    url: '/customer/' + id + '/payment_prompt_entry_summary',
    method: 'get'
  });
}
// 获取客户详情
export function getCustomerDetail(id) {
  return request({
    url: '/customer/getDetail/' + id,
    method: 'get'
  });
}

// 获取历史备注
export function getHistoryRemarks(customerId) {
  return request({
    url: '/exhibition/agent_order/customer_remark/' + customerId
  });
}

// 获取快递方式等
export function getShopDelivery() {
  return request({
    url: '/shop/delivery'
  });
}
// 获取我的客户
export function getMyCustomers(params) {
  return request({
    url: '/my/customer',
    method: 'get',
    params
  });
}

// 获取销售目标
// export function getgoal(params) {
//   return request({
//     url: `/sale_goal/year/${params.year}`,
//     method: 'get',
//     params
//   });
// }
// 设置销售目标
// export function setgoal(data) {
//   return request({
//     url: `/sale_goal/year/${data.year}`,
//     method: 'post',
//     data
//   });
// }
// 获取销售目标完成情况
// export function getgoalsummary(params) {
//   return request({
//     url: `/sale_goal/year/${params.year}/summary`,
//     method: 'get'
//   });
// }
// 获取站内信
export function getInsideLetter(params) {
  return request({
    url: `/inbox/${params.userId}/notice`,
    params
  });
}

// 查看收件箱
export function lookPickUpBox(id) {
  return request({
    url: `/inbox/${id}`
  });
}

// 打开了收件箱的浏览信息
export function hasReadLetter(postId, userId) {
  return request({
    url: `/message/${postId}/open/${userId}`,
    method: 'post'
  });
}

// 获取销售目标
export function getgoal(params) {
  return request({
    url: `/sale_goal/year/${params.year}`,
    method: 'get',
    params
  });
}
// 设置销售目标
export function setgoal(data) {
  return request({
    url: `/sale_goal/year/${data.year}`,
    method: 'post',
    data
  });
}
// 获取销售目标完成情况
export function getgoalsummary(params) {
  return request({
    url: `/sale_goal/year/${params.year}/summary`,
    method: 'get'
  });
}

// 取消配货理由列表
export function getOrderOptionsCancelCode() {
  return request({
    url: '/order_options/cancel_codes',
    method: 'get'
  });
}
// 订单详情里取消配货
export function cancelAllo(stackId, bundleId, data) {
  return request({
    url: `/bundle/reserve_stack/${stackId}/binds/${bundleId}`,
    method: 'delete',
    data
  });
}
// 改价
export function changePrice(order_no, data) {
  return request({
    url: `/exhibition/agent_order/${order_no}/adjust_price`,
    method: 'post',
    data
  });
}

// 取消改价
export function cancelChangePrice(order_no, data) {
  return request({
    url: `/exhibition/agent_order/${order_no}/adjust_price`,
    method: 'delete',
    data
  });
}
