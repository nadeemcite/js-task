module.exports = {
  sum(a, b) {
    if(Number.isInteger(a) && Number.isInteger(b))
      return a+b;
    else
      throw new Error({'Error':'Invalid Arguments'});
  },

  ci(principle, rate_per_annum=6.5, time_in_months=10) {
    let multiplier = Math.pow(1.0 + rate_per_annum/100.0, time_in_months) - 1.0;
    let interest = multiplier * principle;

    return interest + principle;
  },

  zipMeAll(array1, array2) {
    let array3=[];
    let array4=[];

    if(length(array1) != length(array2)) {
      throw new Error({'Error':'Arrays not equal'});
    } else {
      array3.push(array1[0]);
      array3.push(array2[0]);

      array4.push(array1[1]);
      array4.push(array2[1]);

      return [array3, array4];
    }
  }

};
