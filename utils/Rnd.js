const Rnd = {
  random : (min, max) => {
    return Math.random() * (max - min) + min;
  },

  randomInt : (min,max) => {
    return (Math.random() * (max - min) + min) | 0;
  },

  pick : (array) => {
    return array[Math.floor(Math.random() * array.length)];
  }
}

export default Rnd;
