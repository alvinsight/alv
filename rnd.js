export const random = (min, max) => {
  return Math.random() * (max - min) + min;
};

export const randomInt = (min, max) => {
  return (Math.random() * (max - min) + min) | 0;
};

export const pick = array => {
  return array[Math.floor(Math.random() * array.length)];
};

// looks like it's from here: https://stackoverflow.com/a/5408843
export const pointInSphere = (radius = 5) => {
  const phi = Math.random() * (2 * Math.PI);
  const costheta = Math.random() * 2 - 1;
  const u = Math.random();

  const theta = Math.acos(costheta);
  // Math.cbrt is part of ES2015
  const r = radius * Math.cbrt(u);

  let v = [];
  v[0] = r * Math.sin(theta) * Math.cos(phi);
  v[1] = r * Math.sin(theta) * Math.sin(phi);
  v[2] = r * Math.cos(theta);
  return v;
};

export const pointAroundSphere = (radius = 5) => {
  let vertex = [];

  const theta = random(0, Math.PI * 2);
  const phi = random(-Math.PI / 2, Math.PI / 2);

  vertex[0] = radius * Math.sin(theta) * Math.cos(phi);
  vertex[1] = radius * Math.sin(theta) * Math.sin(phi);
  vertex[2] = radius * Math.cos(theta);

  return vertex;
};
