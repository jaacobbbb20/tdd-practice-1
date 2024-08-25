class NumberManipulator {
  constructor(value) {
    this.value = value;
  }

  multiply(num) {
    this.value *= num;
    return this;
  }

  add(num) {
    this.value += num;
    return this;
  }

  subtract(num) {
    this.value -= num;
    return this;
  }

  divide(num) {
    if (num === 0) throw new Error("Can't divide by zero");
    this.value /= num;
    return this;
  }

  getValue() {
    return this.value;
  }
}

module.exports = NumberManipulator;
