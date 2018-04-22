const {sum , prod} = require('./sketch');

// ES6 arrow syntax
// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });


// The name of the test, the function to test this test
test('adds 1 + 2 to equal 3', sumTest())

function sumTest(){
  expect(sum(1, 2)).toBe(3);
}

test('prod 2 * 10 to equal 20', prodTest())

function prodTest(){
  expect(prod(2, 10)).toBe(20);
}
