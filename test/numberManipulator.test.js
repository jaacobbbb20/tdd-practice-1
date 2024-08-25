const { expect } = require('chai');
const NumberManipulator = require('../src/numberManipulator');

describe('NumberManipulator', function() {
  it('Multiplies numbers', function() {
    const num = new NumberManipulator(5);
    expect(num.multiply(2).getValue()).to.equal(10);
  });

  it('Adds numbers', function() {
    const num = new NumberManipulator(5);
    expect(num.add(3).getValue()).to.equal(8);
  });

  it('Subtracts numbers', function() {
    const num = new NumberManipulator(5);
    expect(num.subtract(2).getValue()).to.equal(3);
  });

  it('Divides numbers', function() {
    const num = new NumberManipulator(10);
    expect(num.divide(2).getValue()).to.equal(5);
  });
});
