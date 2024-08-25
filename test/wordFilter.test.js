const { expect } = require('chai');
const wordFilter = require('../src/wordFilter');

describe('wordFilter', function() {
  it('Filters words ending in "er"', function() {
    const input = ['camper', 'rapper', 'hello', 'world'];
    const expected = ['hello', 'world'];
    expect(wordFilter(input)).to.deep.equal(expected);
  });

  it('Can handle an empty array', function() {
    const input = [];
    const expected = [];
    expect(wordFilter(input)).to.deep.equal(expected);
  });
});
