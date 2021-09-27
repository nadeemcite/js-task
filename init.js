module.exports = {
  //TASK 1
  sum(num1,num2) {
    if (typeof num1 != 'number' || typeof num2 != 'number')
      throw Error("Illegal Arguments")

    else return num1 + num2
  },
 
  //TASK 2
  ci(principle, rate_per_annum, time_in_months) {

    if (!principle) {
      throw new Error('principle amount is not provided')
    }
    // Make sure rate_per_annum can be ommited only if time_in_months is ommitted.
    if (time_in_months && !rate_per_annum) {
      throw new Error('Rate per annum can not be ommitted if time in months is provided')
    }
    let rate = rate_per_annum ? rate_per_annum : 6.5
    let months = time_in_months ? time_in_months : 10
    let totalAmount = principle * Math.pow((1 + rate / 100), months)
    let interest = totalAmount - principle;
    return {
      interest: interest,
      amount: totalAmount
    };
  },

  //TASK 3
  zipMeAll(a, b) {
    let c = [];
    if (a.length != b.length) {
      throw new Error('array size is different');
    }
    for (var i = 0; i < a.length; i++) {
      c.push([a[i], b[i]]);
    }
    return c;
  },

  //Task 4
  sortObjects(data, key) {
    return data.sort((a, b) => {
      let x = a[key];
      let y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  },

  //Task 5
  intelligentArray(objArr, operation, key) {
    switch (operation) {
      case 'sum':
        let sum = 0;
        objArr.forEach(element => {
          sum = sum + element[key]
        });
        return sum;

      case 'avg':
        let totalSum = 0;
        objArr.forEach(element => {
          totalSum = totalSum + element[key]
        });
        return totalSum / objArr.length;

      case 'product':
        let product = 1;
        objArr.forEach(element => {
          product = product * element[key]
        });
        return product;

      default:
        throw Error('invalid operation')
    }
  }
}

//Task-1 test case 
console.log("*********************TASK 1***********************");
try{
  //case-1
  let sum1 = module.exports.sum(1,2);
  console.log("Adding a numbers", sum1);
  //case-2
  let sum2 = module.exports.sum(1,"");
  console.log("Adding a number with a string", sum2);
}
catch(err){
  console.log(err.message)
}


//Task-2 test case
console.log("*********************TASK 2***********************");
let ci = module.exports.ci(3000, 5, 10);
console.log("compound interest results", ci);

//Task 3 test case
console.log("*********************TASK 3***********************");
try {
  let zipMeAll = module.exports.zipMeAll([1, 2], [3, 4]);
  console.log("zipMeAll Results", zipMeAll);
  let zipMeAllInvalid = module.exports.zipMeAll([1, 2], [3, 4, 5]);
}
catch (err) {
  console.log(err.message);
}

//Task 4 test case
console.log("*********************TASK 4***********************");
let sortObjects = module.exports.sortObjects([
  { a: 1, b: 2, c: 3 },
  { a: 4, b: 2, c: 1 },
  { a: 3, b: 7, c: 9 },
], 'a');
console.log("sortObjects result", sortObjects);

//Task 5 test case
console.log("*********************TASK 5***********************");
let intelligentArrayResult = module.exports.intelligentArray([
  { a: 1, b: 2, c: 3 },
  { a: 4, b: 2, c: 1 },
  { a: 3, b: 7, c: 9 },
], 'sum', 'a')
console.log("intelligentArrayResult for sum operation", intelligentArrayResult)

let intelligentArrayResult2 = module.exports.intelligentArray([
  { a: 1, b: 2, c: 3 },
  { a: 4, b: 2, c: 1 },
  { a: 3, b: 7, c: 9 },
], 'avg', 'b')
console.log("intelligentArrayResult for avg", intelligentArrayResult2)

let intelligentArrayResult3 = module.exports.intelligentArray([
  { a: 1, b: 2, c: 3 },
  { a: 4, b: 2, c: 1 },
  { a: 3, b: 7, c: 9 },
], 'product', 'c')
console.log("intelligentArrayResult for product", intelligentArrayResult3)

try {
  let intelligentArrayResult4 = module.exports.intelligentArray([
    { a: 1, b: 2, c: 3 },
    { a: 4, b: 2, c: 1 },
    { a: 3, b: 7, c: 9 },
  ], 'invalid', 'c')
  console.log("results", intelligentArrayResult4)
}
catch (err) {
  console.log(err.message)
}
