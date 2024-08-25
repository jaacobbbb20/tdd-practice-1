const { expect } = require('chai');
const reverseWords = require('../src/reverseWords');

describe('reverseWords', function() {
  it('Reverses each word in the array', function() {
    const input = ['hello', 'world'];
    const expected = ['olleh', 'dlrow'];
    expect(reverseWords(input)).to.deep.equal(expected);
  });

  it('Can handle an empty array', function() {
    const input = [];
    const expected = [];
    expect(reverseWords(input)).to.deep.equal(expected);
  });
});
