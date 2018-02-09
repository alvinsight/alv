/**
 * Capitalises the first word of a string, so "can't stop" becomes "Can't stop"
 * @param {string} str - the target string
 * @returns {string}
 */
export const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Turns a string into a normalised format that can be used for slugs and ids
 * so "I'm Yours" becomes "i-m-yours"
 * @param {string} str - the target string
 * @returns {string}
 */
export const slugify = str => {
  return str
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-'); // Replace multiple - with single -
};

/**
 * Converts a number to a string then adds leading zeros to it.
 * @param {number} number - the number to add zeros to
 * @param {number} amount - the maximum number of leading zeros, so 2 will change 1 to "001"
 * @returns {string}
 */
export const addLeadingZeros = (number, amount) => {
  let str = number.toString();
  const steps = amount + 1 - str.length;

  for (let i = 0; i < steps; i++) {
    str = '0' + str;
  }
  return str;
};
