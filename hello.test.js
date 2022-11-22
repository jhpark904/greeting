var utils  = require('course-utilities');
var hello = utils.load('./hello.js', 'hello');

test('outputs the correct string', () => {
  expect(hello()).toBe("Hello World!");
});

test('does not output bye world', () => {
  expect(hello()).not.toBe("Bye World!")
});