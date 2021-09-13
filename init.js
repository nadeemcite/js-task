module.exports = {
  sum(a, b) {
    if (Number(a) && Number(b)) {
      return a + b;
    } else {
      throw "Error";
    }
  },

  ci(p, r, t) {
    const amount = p * Math.pow(1 + r / 12 / 100, t);
    return {
      interest: amount - p,
      amount,
    };
  },
};
