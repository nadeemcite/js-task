module.exports = {
  sum(a, b) {
    if (isNaN(a) || isNaN(b)) {
      throw "Input is not number(s)";
    }
    return a + b;
  },

  ci(P, R = 6.5, t = 10) {
    var amount = P * Math.pow(1 + R / 100 / 12, t);
    var interest = amount - P;
    return { interest: interest, amount: amount };
  },
  zipMeAll(a, b) {
    if (a.length != b.length) {
      throw "length is mismatched";
    }
    var c = a.map(function (e, i) {
      return [e, b[i]];
    });
    return c;
  },

  sortObjects(myArray, key) {
    var result = myArray.sort((a, b) => a[key] - b[key]);
    return result;
  },
  intelligentArray(a, b, c) {
    var result = 0;
    if (b == "sum") {
      result = a.reduce(function (sum, current) {
        return sum + current[c];
      }, 0);
    } else if (b == "avg") {
      var count = 0;
      result = a.reduce(function (sum, current) {
        count++;
        return sum + current[c];
      }, 0);
      result = result / count;
    } else if (b == "product") {
      result = a.reduce(function (mul, current) {
        return mul * current[c];
      }, 1);
    }
    return result;
  },
};
