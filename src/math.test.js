const sum = require ('./math.js');
const sub = require ('./math.js');
const mult = require ('./math.js');
const div = require ('./math.js');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});

test('subbtracts 2 - 1 to equal 1', () => {
    expect(sub(2,1)).toBe(1);
});

test('multiplies 2 * 3 to equal 6', () => {
    expect(mult(2,3)).toBe(6);
});

test('divides 6 / 3 to equal 2', () => {
    expect(div(6, 3)).toBe(2);
});