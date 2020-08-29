const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event1', () => console.log('Event Fired!'));

myEmitter.emit('event1');