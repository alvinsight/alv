/** @module EventDispatcher */

import Signal from 'signals';
// TODO move to mini-signals

class EventDispatcher {
  constructor() {
    this._eventHash = {};
  }

  /**
   *
   * Adds a new listener to the event specified in the first parameter
   *
   * @param {string} eventName
   * @param {function} callback
   * @param {any} callbackScope
   */
  add(eventName, callback, callbackScope) {
    let signal = this.getSignal(eventName);

    signal.add(callback, callbackScope);
  }

  /**
   * Removes a listener from the event specified in the first parameter, will log a warning if the event cannot be found
   * @param {string} eventName
   * @param {function} callback
   * @param {any} callbackScope
   */
  remove(eventName, callback, callbackScope) {
    let signal = this.getSignal(eventName);

    if (!signal) {
      console.warn(`Did not find any event to remove with the name ${evenName}`);

      return;
    }

    signal.remove(callback, callbackScope);
  }

  /**
   * Dispatches an event
   * @param {string} eventName the name of the event to dispatch
   * @param {any} args - the arguments to pass to the listener
   */
  dispatch(eventName, ...args) {
    let signal = this.getSignal(eventName);

    signal.dispatch(...args);
  }

  getSignal(eventName) {
    let event = this._eventHash[eventName];
    if (!event) {
      event = new Signal();
      this._eventHash[eventName] = event;
    }

    return event;
  }
}

const ed = new EventDispatcher();
export default ed;
