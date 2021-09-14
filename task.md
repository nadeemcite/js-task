## Rules

1. You are not allowed to create a new file. All tasks should be created in the specified files.

### Task 1

Complete js function sum in [init.js](init.js) file.

This function should sum 2 numbers and return a number.

Make sure user cannot provide string, You need to throw an exception if the arguments are not acceptable.


### Task 2

Create a function "ci" in just after sum for calculating compound interest.

This function should accept one compulsory and two optional arguments.

```(priciple, [rate_per_annum], [time_in_months])```

The function should return an object with both amount and interest.

Sample output for ci(3000, 5, 10)

```
{
    "interest": 127, 
    "amount": 3127
}
```

Make sure if optional arguments are not given rate_per_annum will be considered as 6.5.
And if time_in_months is not provided it has to be considered as 10.

Make sure rate_per_annum can be ommited only if time_in_months is ommitted.

### Task 3

Create a function "zipMeAll" should zip two arrays.

Sample input 
```zipMeAll([1,2],[3,4])```
Should return
```[[1,3],[2,4]]```

Please throw error if size of arrays differ.

### Task 4 sort an array of objects

Create a function "sortObjects" to sort an array of objects. 
This function takes 2 arguments, first argument as array of objects and second argument as key in string.
For this task you need to take only one level of keys.

Sample Input
```
    sortObjects([
        {a:1,b:2,c:3},
        {a:4,b:2,c:1},
        {a:3,b:7,c:9},
    ], 'a')
```

Should return
```
[
    {a:1,b:2,c:3},
    {a:3,b:7,c:9},
    {a:4,b:2,c:1}   
]
```


### Task 5 intelligent Function for array of objects

Create a function "intelligentArray"

It accepts 3 arguments. 
1. First argument is array of objects
2. Second argument operation. i.e. sum, avg, product
3. Third argument key to perform that operation

Sample Input 1
```
    intelligentArray([
        {a:1,b:2,c:3},
        {a:4,b:2,c:1},
        {a:3,b:7,c:9},
    ], 'sum','a')
```
Output
```
    8
```
Sample Input 2
```
    intelligentArray([
        {a:1,b:2,c:3},
        {a:4,b:2,c:1},
        {a:3,b:7,c:9},
    ], 'avg','b')
```
Output
```
    3.6666666666666665
```
Sample Input 3
```
    intelligentArray([
        {a:1,b:2,c:3},
        {a:4,b:2,c:1},
        {a:3,b:7,c:9},
    ], 'product','c')
```
Output
```
    27
```