
export default {
  /**
 * @description 自动生成uuId
 * @author luckelectricity
 * @export getUuId
 * @param
 * @returns string
 */
  getUuId() {
    let len = 32; // 32长度
    let radix = 16; // 16进制
    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    let uuid = [],
      i;
    radix = radix || chars.length;
    if (len) {
      for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
    } else {
      let r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4';
      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16;
          uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
        }
      }
    }
    return uuid.join('');
  },
  /**
   * @param key 设置localStorage的key
   * @param val 设置对应key下的val
   */
  setData(key, val) {
    if(typeof arguments[1] == "object") {
      var data = JSON.stringify(arguments[1]);
      localStorage.setItem(arguments[0], data);
    } else if(typeof arguments[1] == "string") {
      localStorage.setItem(arguments[0], arguments[1]);
    }
  },
  /**
   * @param  key 通过key获取localStorage的值
   */
  getData(key) {
    var val = localStorage.getItem(arguments[0]) == null ? "" : localStorage.getItem(arguments[0]);
    if(val.indexOf("{") != -1) {
      return JSON.parse(val);
    }
    return val;
  }
}