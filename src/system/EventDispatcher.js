import Signal from 'signals';
// TODO move to mini-signals

class EventDispatcher {
  constructor() {
    this.eventHash = {};
  }

  add(eventName, callback, callbackScope) {
    let signal = this.getSignal(eventName);

    signal.add(callback, callbackScope);
  }

  dispatch(eventName, ...args) {
    let signal = this.getSignal(eventName);

    signal.dispatch(...args);
  }

  getSignal(eventName) {
    let event = this.eventHash[eventName];
    if (!event) {
      event = new Signal();
      this.eventHash[eventName] = event;
    }

    return event;
  }
}

const ed = new EventDispatcher();
export default ed;
