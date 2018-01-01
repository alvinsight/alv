export const clamp = (value, min, max) => {
  if (value < min) return min;
  if (value > max) return max;
  return value;
};

export const lerp = (start, stop, amt) => {
  return amt * (stop - start) + start;
};

export const map = (n, inputMin, inputMax, outputMin, outputMax) => {
  return (
    (n - inputMin) / (inputMax - inputMin) * (outputMax - outputMin) + outputMin
  );
};
