/**
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export const random = (min, max) => {
  return Math.random() * (max - min) + min;
};

/**
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export const randomInt = (min, max) => {
  return (Math.random() * (max - min) + min) | 0;
};

/**
 *
 * @param {any[]} array
 * @returns {any}
 */
export const pick = array => {
  return array[Math.floor(Math.random() * array.length)];
};

/**
 * It looks like the original implementation is from here: https://stackoverflow.com/a/5408843
 * @param {number} radius
 * @returns {number[]}
 */
export const pointInSphere = (radius = 1) => {
  const phi = Math.random() * (2 * Math.PI);
  const costheta = Math.random() * 2 - 1;
  const u = Math.random();

  const theta = Math.acos(costheta);
  // Math.cbrt is part of ES2015
  const r = radius * Math.cbrt(u);

  let vertex = [];
  vertex[0] = r * Math.sin(theta) * Math.cos(phi);
  vertex[1] = r * Math.sin(theta) * Math.sin(phi);
  vertex[2] = r * Math.cos(theta);
  return vertex;
};

/**
 *
 * @param {number} radius
 * @returns {number[]}
 */
export const pointAroundSphere = (radius = 1) => {
  let vertex = [];

  const theta = random(0, Math.PI * 2);
  const phi = random(-Math.PI / 2, Math.PI / 2);

  vertex[0] = radius * Math.sin(theta) * Math.cos(phi);
  vertex[1] = radius * Math.sin(theta) * Math.sin(phi);
  vertex[2] = radius * Math.cos(theta);

  return vertex;
};
