import request from './js/fetch';
// const m = '/manage'
// 获取颜色尺码分组
export function gercolorsizeprop(type = 'color') {
    return request({
        url: '/goods_props/color_size',
        method: 'get',
        params: {
            type
        }
    });
}
// 删除颜色尺码
export function delcolorsize(id) {
    return request({
        url: '/goods_props_value/' + id,
        method: 'delete'
    });
}

export function goods_props(data) {
    return request({
        url: '/goods_props',
        method: 'post',
        data
    });
}
export function getprops(id = 99) {
    return request({
        url: `/category/${id}`,
        method: 'get'
    });
}

export function addProduct(data) {
    return request({
        url: '/product',
        method: 'post',
        data
    });
}

export function getData(obj) {
    if (toString.call(obj) !== '[object Object]') {
        throw new Error('参数错误');
    }
    return request({
        url: '/product',
        method: 'get',
        params: obj
    });
}

export function getDataWithImage(obj) {
    if (toString.call(obj) !== '[object Object]') {
        throw new Error('参数错误');
    }
    return request({
        url: '/item/product_sales',
        method: 'get',
        params: obj
    });
}

export function getDetail(id) {
    return request({
        url: `/product/${id}`,
        method: 'get'
    });
}
export function putGoods(id, data) {
    return request({
        url: `/product/${id}`,
        method: 'put',
        data
    });
}

export function deleteProduct(id) {
    return request({
        url: `/product/${id}`,
        method: 'delete'
    });
}

export function getSkus(obj) {
    return request({
        url: '/product_sku',
        method: 'get',
        params: obj
    });
}

export function validSuppler(obj) {
    return request({
        url: '/supplier_sn_check',
        method: 'get',
        params: obj
    });
}

// 批量下架 type 判断 是上架还是删除
export function batch(type, data) {
    const method = type ? 'delete' : 'post';
    return request({
        url: '/product_sku_disabled',
        method,
        data
    });
}
// 删除产品的sku post 删除sku  delete 恢复删除的sku
export function deleteProductSku(id = null, method = 'post') {
    return request({
        url: '/product_sku_deleted/' + id,
        method
    });
}

// 获取已删除的商品列表
export function getdelList(obj) {
    return request({
        url: '/product_sku_deleted',
        method: 'get',
        params: obj
    });
}

// 删除商品恢复操作
export function restore(id) {
    return request({
        url: '/product_sku_deleted/' + id,
        method: 'delete'
    });
}

// 获取待定价的列表
export function getsetpricelist(obj) {
    return request({
        url: '/product_set_price',
        method: 'get',
        params: obj
    });
}

export function productsetprice(obj) {
    return request({
        url: '/product_set_price',
        method: 'post',
        data: obj
    });
}

// 调价上传接口

export function productAdjustPrice(obj) {
    return request({
        url: '/product_sku_modify_price',
        method: 'post',
        data: obj
    });
}

// 调价日志sku级别
export function getAdjustlog(id) {
    return request({
        url: '/product_sku_modify_price/' + id + '/logs',
        method: 'get'
    });
}

export function getSkuModify(id) {
    return request({
        url: '/product_sku_modify_price/' + id,
        method: 'get'
    });
}
// 上传到展厅
export function productPostExhibition(obj) {
    return request({
        url: '/product_sync/exhibition',
        method: 'post',
        data: obj
    });
}

// 新增分组
export function addSkucolorSize(obj) {
    return request({
        url: '/test',
        method: 'post',
        data: obj
    });
}
//根据sku搜索
export function searchFromSku(obj) {
    return request({
        url: '/query_product_by_sn',
        method: 'get',
        params: obj
    });
}