// utils.js

/**
 * 格式化日期为 'YYYY-MM-DD' 格式
 * @param {Date} date - 要格式化的日期
 * @returns {string} 格式化后的日期字符串
 */
export const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

/**
 * 随机生成指定范围内的整数
 * @param {number} min - 最小值
 * @param {number} max - 最大值
 * @returns {number} 随机整数
 */
export const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * 深拷贝对象
 * @param {Object} obj - 要拷贝的对象
 * @returns {Object} 深拷贝后的新对象
 */
export const deepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
};

/**
 * 检查字符串是否为空
 * @param {string} str - 要检查的字符串
 * @returns {boolean} 如果字符串为空则返回 true，否则返回 false
 */
export const isEmptyString = (str) => {
    return !str || str.trim().length === 0;
};
