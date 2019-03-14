import Vue from 'vue';
import NA from 'number-accuracy';

function op(value) {
  if (value < 10) {
    return '0' + value;
  }
  return value;
}
Vue.filter('format', function(value) {
  if (!value) return;
  const date = new Date(value);
  const year = date.getFullYear();
  const month = op(date.getMonth() + 1);
  const day = op(date.getDate());
  const hour = op(date.getHours());
  const min = op(date.getMinutes());
  const sec = op(date.getSeconds());
  return `${year}-${month}-${day} ${hour}:${min}:${sec}`;
});

function retain(value, num) {
  const val = value * 1 + '';
  const valsplit = val.split('.');
  if (valsplit.length === 1) {
    return `${val}.00`;
  } else {
    const sec = valsplit[1];
    if (sec.length === 1) {
      return `${val}0`;
    }
    return val;
  }
}

Vue.filter('accuracy', function(value, price) {
  const rate = value;
  if (rate > 0 && rate < 0.01) {
    return 0.01;
  } else if (rate < price && NA.minus(price, rate) < 0.01) {
    return 0.01;
  }
  const num = NA.round(rate, 2);

  return retain(num);
});
Vue.filter('formatprice', function(value, places, symbol, thousand, decimal) {
  value = value || 0;
  places = !isNaN((places = Math.abs(places))) ? places : 2;
  symbol = symbol !== undefined ? symbol : '$';
  thousand = thousand || ',';
  decimal = decimal || '.';
  var negative = value < 0 ? '-' : '',
    i = parseInt((value = Math.abs(+value || 0).toFixed(places)), 10) + '',
    j = (j = i.length) > 3 ? j % 3 : 0;
  return (
    symbol +
    negative +
    (j ? i.substr(0, j) + thousand : '') +
    i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousand) +
    (places
      ? decimal +
        Math.abs(value - i)
          .toFixed(places)
          .slice(2)
      : '')
  );
});

Vue.filter('price', function(value) {
  if (!/^\d+(\.\d+)?$/.test(value)) {
    return 'N/A';
  }
  return '￥' + retain(NA.round(value, 2));
});

Vue.filter('status', function(value, isSet) {
  let word = null;
  if (!isSet) {
    word = '待定价';
  } else {
    word =
      value === 'disabled' ? '已停售' : value === 'enabled' ? '销售中' : '未知';
  }

  return word;
});

export function accuracy(value, price) {
  const rate = value;
  if (rate > 0 && rate < 0.01) {
    return 0.01;
  } else if (rate < price && NA.minus(price, rate) < 0.01) {
    return 0.01;
  }
  const num = NA.round(rate, 2);

  return retain(num);
}
