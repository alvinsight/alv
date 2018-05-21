import EventDispatcher from '../src/system/EventDispatcher';
import test from 'tape';

const evd = EventDispatcher;

test('Event Dispatcher', t => {
  t.ok(evd, 'The EventDispatcher instance exists');
  evd.add('testEvent', () => {
    t.pass('Can subscribe to a custom event');
  });

  evd.dispatch('testEvent');
  t.end();
});
