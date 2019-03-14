'use strict';

import request from './js/fetch';

// 获取当天统计概要
export function getCurrentDaySummary() {
  return request({
    url: '/current_day_summary',
    method: 'get'
  });
}

// 销售排行
export function getSaleRank() {
  return request({
    url: '/sale_rank',
    method: 'get'
  });
}

// 采购排行

export function getPurchaseRank() {
  return request({
    url: '/purchase_rank',
    method: 'get'
  });
}

export function getAnalyze(obj) {
  if(!!obj.order_start_date)obj.order_start_date = obj.order_start_date/1000
  if(!!obj.order_end_date)obj.order_end_date = obj.order_end_date/1000 + 86399
  return request({
    url: '/exhibition/sale_order/summary/style_filter',
    method: 'get',
    params: obj
  });
}

export function getAnalyzeDate(obj) {
  return request({
    url: '/exhibition/sale_order/summary/style_by_date',
    method: 'get',
    params: obj
  });
}
