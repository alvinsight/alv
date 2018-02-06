class Ticker {
  constructor() {
    this.deltaTime = 1;

    this.callbacks = [];
    this.scopes = [];
    this.lastTime = 0;
    this.updateBound = this.update.bind(this);
    this.rafId = -1;

    this.start();
  }

  start() {
    this.update();
  }

  stop() {
    cancelAnimationFrame(this.rafId);
  }

  add(callback, scope) {
    if (this.callbacks.indexOf(callback) === -1) {
      this.callbacks.push(callback);
      this.scopes.push(scope);
    }
  }

  remove(callback, scope) {
    let index = this.callbacks.indexOf(callback);

    if (index !== -1) {
      this.callbacks.splice(index, 1);
      this.scopes.splice(index, 1);
    }
  }

  update() {
    let currentTime = window.performance
      ? window.performance.now()
      : Date.now();

    this.deltaTime = currentTime - this.lastTime;
    this.deltaTime *= 0.06;
    this.lastTime = currentTime;

    for (let i = 0; i < this.callbacks.length; i++) {
      let cb = this.callbacks[i];
      let scope = this.scopes[i];
      cb.call(scope);
    }

    this.rafId = requestAnimationFrame(this.updateBound);
  }
}

const t = new Ticker();
export default t;
