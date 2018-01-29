/**
 * Capitalises the first word of a string, so "can't stop" becomes "Can't stop"
 * @param {String} str - the target string
 */
export const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Turns a string into a normalised format that can be used for slugs and ids
 * so "I'm Yours" becomes "i-m-yours"
 * @param {String} str - the target string
 */
export const slugify = str => {
  return str
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-'); // Replace multiple - with single -
};
