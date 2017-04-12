const Mate = {
  clamp : (value, min, max) => {
    if(value < min) return min;
    if(value > max) return max;
    return value;
  },

  lerp : (start, stop, amt) => {
    return amt*(stop-start)+start;
  },

  map : (n, inputMin, inputMax, outputMin, outputMax) => {
    return ((n-inputMin)/(inputMax-inputMin))*(outputMax-outputMin)+outputMin;
  }
};

export default Mate;
