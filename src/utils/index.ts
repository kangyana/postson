/**
 * 验证url
 * @param {string} url
 */
export const validateUrl = (url: string) => {
  return /http(|s):\/\/.*$/.test(url);
};
