module.exports = {
  sum(a, b) {
    if (isNaN(a) || isNaN(b)) {
      throw "Input is not number(s)";
    }
    return a + b;
  },
