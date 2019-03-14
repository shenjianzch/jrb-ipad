import NA from 'number-accuracy';

function pare(obj) {
  const arr = [];
  for (const k in obj) {
    arr.push([k.split('_')[0], obj[k]]);
  }
  const array = arr.map(d => {
    return d.join(':');
  });
  return array.join(';');
}

export const propertHelper = attr => {
  console.log(attr, 'attr');
  const obj = {};
  let a = -1;
  const str = {};
  attr.forEach(element => {
    if (element.type === 'input') {
      obj[element.id] = a;
      str[element.id] = element.name;
      str[a] = element.value;
      a--;
    } else {
      obj[element.id] = element.value.value * 1;
      str[element.id] = element.name;
      str[element.value.value] = element.value.label;
    }
  });
  // console.log(pare(obj), pare(str), 'dddddd')
  return {
    props: pare(obj),
    props_str: pare(str)
  };
};
export function singeProperty(...obj) {
  const prop = {};
  const prop_str = {};
  let thumb = '';
  console.log(obj, 'objjjjbbbggg');
  obj.forEach(el => {
    if (el.thumb) {
      thumb = el.thumb;
    }

    prop[el.parentId + '_'] = el.id;
    prop_str[el.parentId + '_'] = el.parentName;
    prop_str[el.id + '_'] = el.name;
  });
  return {
    thumb,
    sale_props: pare(prop),
    sale_props_str: pare(prop_str)
  };
}

export function joinparent(arr) {
  const a = [];
  arr.forEach(el => {
    if (el.value.length > 0) {
      el.value.forEach(da => {
        da.parentId = el.id;
        da.parentName = el.name;
        a.push([da]);
      });
    }
  });
  return a;
}
function op(d) {
  try {
    const c = d.split(';');
    const obj = {};
    c.forEach(da => {
      const u = da.split(':');
      obj[u[0]] = u[1];
    });
    return obj;
  } catch (err) {
    // throw new Error('跪了');
  }
}
export function arrtoject(props, props_str) {
  return {
    props: op(props),
    props_str: op(props_str)
  };
}

export const ArraynoRepeat = (array, id = 'id') => {
  const obj = {};
  const arr = [];
  array.forEach(da => {
    if (!obj[da[id]]) {
      obj[da[id]] = 1;
      arr.push(da);
    }
  });
  return arr;
};

export function accuracy(obj) {
  const rate = obj.price * NA.divide(obj.brokerage_rate, 100);
  if (rate > 0 && rate < 0.01) {
    return 0.01;
  } else if (rate < obj.price && NA.minus(obj.price, rate) < 0.01) {
    return 0.01;
  }
  const num = NA.round(rate, 2);
  return num;
}

// 筛选颜色规格
export function filtercolorsize(value, target) {
  // console.log(target, 'target')
  // target = ArraynoRepeat(target)
  target.forEach(da => {
    const arr = [];
    value.forEach(ca => {
      if (ca.extra && ca.extra.bg) {
        ca.bg = ca.extra.bg;
      }
      if (ca.extra && ca.extra.group && da.name === ca.extra.group) {
        arr.push(ca);
        // da.group.push(ca)
        da.group = arr;
      }
      if (da.name == '其他') {
        if (!ca.extra) {
          ca.extra = {
            group: '其他'
          };
          arr.push(ca);
          da.group = arr;
        }
      }
    });
  });
  return target;
}

export function findNameList(id, arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].group.length; j++) {
      // eslint-disable-next-line to ignore the next line
      if (id * 1 === arr[i].group[j].id * 1) {
        return {
          optionname: arr[i].name,
          optionlist: arr[i].group
        };
      }
    }
  }
  return {
    optionname: '',
    optionlist: ''
  };
}

// 类目分组归类

export function sorted(arr) {
  const obj = {};
  const array = [];
  arr.forEach((da, index) => {
    if (da.parent_id < 1) {
      da.children = [];
      obj[da.id] = da;
    }
  });
  arr.forEach(da => {
    if (da.parent_id > 0) {
      obj[da.parent_id].children.push(da);
    }
  });
  Object.keys(obj).forEach(da => {
    array.push(obj[da]);
  });
  return array;
}

export function around2(val) {
  return NA.round(val, 2);
}

export function filterRouters(router, conditions) {}
