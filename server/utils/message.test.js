const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var message = generateMessage('Josh', 'This is a test');

    expect(message.from).toEqual('Josh');
    expect(message.text).toEqual('This is a test');
    expect(message.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Josh';
    var lat = 1;
    var lng = 1;
    var message = generateLocationMessage(from, lat, lng);

    expect(message.createdAt).toBeA('number');
    expect(message.from).toEqual(from);
    expect(message.url).toEqual('https://www.google.com/maps?q=1,1');
  });
});
