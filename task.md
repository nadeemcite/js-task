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




