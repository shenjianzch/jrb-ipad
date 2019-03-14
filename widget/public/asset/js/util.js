import dayjs from 'dayjs';
export function filtergoods(sale_props, sale_props_str) {
    let a = {};
    const c = sale_props_str.split(';');
    c.forEach(g => {
        const v = {};
        const o = g.split(':');
        v[o[0]] = o[1];
        a = Object.assign(a, v);
    });
    const d = [];
    sale_props.split(';').forEach(e => {
        const b = e.split(':');
        const f = [];
        b.forEach((el, v) => {
            f.push(a[b[v]]);
        });

        d.push(f.join(':'));
    });
    console.log(d, 'uuuuuuuuuu');
    return d;
}

export function message(self, fn) {
    self
        .$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        })
        .then(() => {
            fn();
        })
        .catch(() => {
            self.$message({
                type: 'info',
                message: '已取消删除'
            });
        });
}

export const mapping = {
    closed: '订单关闭',
    not_paid: '订单未付款',
    paid: '等待卖家发货',
    waite_deliver: '准备发货',
    delivered: '已发货',
    received: '已收货',
    refund_verify: '退款审核',
    refund_verify_failed: '审核失败',
    refund_verify_succeed: '审核成功',
    refunding: '退款中',
    complete_refund: '完成退款'
};

export const step = {
    closed: 0,
    not_paid: 1,
    paid: 2,
    waite_deliver: 3,
    delivered: 4,
    received: 5,
    refund_verify: 0,
    refund_verify_failed: 0,
    refund_verify_succeed: 0,
    refunding: 0,
    complete_refund: 0
};

export function format(val) {
    if (!val) return ''
    return dayjs(new Date(val).getTime()).format('YYYY-MM-DD hh:mm:ss');
}
export function ymd(val) {
    const d = new Date(val);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    return `${year}-${month}-${day}`;
}
export function formatMoney(number, places, symbol, thousand, decimal) {
    number = number || 0;
    places = !isNaN((places = Math.abs(places))) ? places : 2;
    symbol = symbol !== undefined ? symbol : '$';
    thousand = thousand || ',';
    decimal = decimal || '.';
    var negative = number < 0 ? '-' : '',
        i = parseInt((number = Math.abs(+number || 0).toFixed(places)), 10) + '',
        j = (j = i.length) > 3 ? j % 3 : 0;
    return (
        symbol +
        negative +
        (j ? i.substr(0, j) + thousand : '') +
        i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousand) +
        (places ?
            decimal +
            Math.abs(number - i)
            .toFixed(places)
            .slice(2) :
            '')
    );
}
export function formatmobile(value, isHide = false) {
    return isHide ? value.substring(0, 3) + '****' + value.substring(7) : value;
}
// 判断是不是safari 浏览器并且拿到版本号
export function judgeBowser() {
    var ua = navigator.userAgent.toLowerCase();
    const val = /version\/([\w.]+).*(safari)/.exec(ua)
    let version = null
    if (val != null) {
        // 非null 代表是safari
        version = val[1]
    }
    return version.split('.')[0]
}