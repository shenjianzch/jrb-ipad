'use strict';

import request from './js/fetch';

/**
 * 查询供应商
 * @param {Object} query 查询参数
 */
const m = '';
export function getSupplier(query = null) {
  return request({
    url: `${m}/supplier`,
    method: 'get',
    params: query
  });
}

export function getSupplierBrand(id) {
  return request({
    url: `${m}/supplier/${id}/authorized-brand`,
    method: 'get'
  });
}
// 获取供应商分类下拉列表
export function getSupplierDropList(id) {
  return request({
    url: '/supplier/drop_list',
    method: 'get'
  });
}

// 批量启用禁用供应商

export function mutilOpSupplier(obj, type = 'post') {
  const method = type;
  return request({
    url: '/supplier_disabled',
    method,
    data: obj
  });
}

// 新增供应商
export function addSupplier(obj) {
  return request({
    url: '/supplier',
    method: 'post',
    data: obj
  });
}
// 获取供应商详情必须带id
export function getSupplierDesc(id) {
  if (!id) {
    throw new Error('缺少必要的参数Id');
  }
  return request({
    url: '/supplier/' + id,
    method: 'get'
  });
}

// 修改供应商详情
export function editSupplierDesc(id, obj) {
  if (!id) {
    throw new Error('缺少必要的参数Id');
  }
  return request({
    url: '/supplier/' + id,
    method: 'put',
    data: obj
  });
}

// 删除供应商
export function delSupplier(id) {
  if (!id) {
    throw new Error('缺少必要的参数Id');
  }
  return request({
    url: '/supplier/' + id,
    method: 'delete'
  });
}

// 获取供应商的结算账户信息
export function getSupplierAccount(id) {
  if (!id) {
    throw new Error('缺少必要的参数Id');
  }
  return request({
    url: '/supplier/' + id + '/account',
    method: 'get'
  });
}

// 修改供应商的结算账户
export function editSupplierAccount(id, obj) {
  if (!id) {
    throw new Error('缺少必要的参数Id');
  }
  return request({
    url: '/supplier/' + id + '/account',
    method: 'put',
    data: obj
  });
}

// 报单列表接口

export function getBreport(obj) {
  return request({
    url: '/unpurchased_summary',
    method: 'get',
    params: obj
  });
}

// 报单筛选 采购单列表
export function getpurchaseOrderList(obj) {
  return request({
    url: '/purchase_order/check_goods/order_list',
    method: 'get',
    params: obj
  });
}

// /purchase_order/check_goods

export function purchaseCheckGoods(obj) {
  return request({
    url: '/purchase_order/check_goods',
    method: 'post',
    data: obj
  });
}
