/**
 *
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export const clamp = (value, min, max) => {
  if (value < min) return min;
  if (value > max) return max;
  return value;
};

/**
 *
 * @param {number} start
 * @param {number} stop
 * @param {number} amt
 * @returns {number}
 */
export const lerp = (start, stop, amt) => {
  return amt * (stop - start) + start;
};

/**
 *
 * @param {number} n
 * @param {number} inputMin
 * @param {number} inputMax
 * @param {number} outputMin
 * @param {number} outputMax
 * @returns {number}
 */
export const map = (n, inputMin, inputMax, outputMin, outputMax) => {
  return (
    (n - inputMin) / (inputMax - inputMin) * (outputMax - outputMin) + outputMin
  );
};
