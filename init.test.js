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
  ];
  seriesToTest.forEach((row) => {
    const adjustedRow = [row[0]];
    if (row.length < 3) {
      adjustedRow.push(6.5);
      adjustedRow.push(10);
    } else if (row.length < 4) {
      adjustedRow.push(row[1]);
      adjustedRow.push(10);
    } else {
      adjustedRow.push(row[1]);
      adjustedRow.push(row[2]);
    }
    adjustedRow.push(row.slice(-1)[0]);
    const val = init.ci(adjustedRow[0], adjustedRow[1], adjustedRow[2]);
    expect(val.amount).toBeCloseTo(adjustedRow[3] + adjustedRow[0], 2);
    expect(val.interest).toBeCloseTo(adjustedRow[3], 2);
  });
});

test("test zip function", () => {
  expect(init.zipMeAll([1, 2], [3, 4])).toEqual([
    [1, 3],
    [2, 4],
  ]);
});

test("zip function should throw error if length mismatch", () => {
  expect(() => {
    init.zipMeAll([1, 2], [3]);
  }).toThrow();
});

test("zip function should throw error if array is not passed", () => {
  expect(() => {
    const a = init.zipMeAll("abc", "abc");
    console.log(a);
  }).toThrow();
});

test("sort array of objects", () => {
  expect(
    init.sortObjects(
      [
        { a: 1, b: 2, c: 3 },
        { a: 4, b: 2, c: 1 },
        { a: 3, b: 7, c: 9 },
      ],
      "a"
    )
  ).toEqual([
    { a: 1, b: 2, c: 3 },
    { a: 3, b: 7, c: 9 },
    { a: 4, b: 2, c: 1 },
  ]);
});

test("test intelligent array of objects", () => {
  expect(
    init.intelligentArray(
      [
        { a: 1, b: 2, c: 3 },
        { a: 4, b: 2, c: 1 },
        { a: 3, b: 7, c: 9 },
      ],
      "sum",
      "a"
    )
  ).toEqual(8);
  expect(
    init.intelligentArray(
      [
        { a: 1, b: 2, c: 3 },
        { a: 4, b: 2, c: 1 },
        { a: 3, b: 7, c: 9 },
      ],
      "avg",
      "b"
    )
  ).toBeCloseTo(3.67, 2);
  expect(
    init.intelligentArray(
      [
        { a: 1, b: 2, c: 3 },
        { a: 4, b: 2, c: 1 },
        { a: 3, b: 7, c: 9 },
      ],
      "product",
      "c"
    )
  ).toEqual(27);
});