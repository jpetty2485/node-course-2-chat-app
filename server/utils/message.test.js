const expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var message = generateMessage('Josh', 'This is a test');

    expect(message.from).toEqual('Josh');
    expect(message.text).toEqual('This is a test');
    expect(message.createdAt).toBeA('number');
  });
});
