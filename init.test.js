var init = require("./init");

test("adds 1 + 2 to equal 3", () => {
  expect(init.sum(1, 2)).toBe(3);
});

test("adds 1.5 + 2.7 to equal 4.2", () => {
  expect(init.sum(1.5, 2.7)).toBe(4.2);
});

test("adding non numbers throws exception", () => {
  expect(() => {
    init.sum("a1.5", 2.7);
  }).toThrow();
});

test("test a series of compund interests", () => {
    const seriesToTest = [
        [3000, 5, 10, 127.37],
        [3000, 5, 127.37],
        [3000, 166.52],
    ]
    seriesToTest.forEach(row=>{
        const adjustedRow = [row[0]]
        if(row.length < 3){
            adjustedRow.push(6.5);
            adjustedRow.push(10);
        }else if(row.length < 4){
            adjustedRow.push(row[1]);
            adjustedRow.push(10);
        }else{
            adjustedRow.push(row[1]);
            adjustedRow.push(row[2]);
        }
        adjustedRow.push(row.slice(-1)[0]);
        const val = init.ci(adjustedRow[0], adjustedRow[1], adjustedRow[2]);
        expect(val.amount).toBeCloseTo( adjustedRow[3] + adjustedRow[0],2);
        expect(val.interest).toBeCloseTo( adjustedRow[3],2);
    });
});
