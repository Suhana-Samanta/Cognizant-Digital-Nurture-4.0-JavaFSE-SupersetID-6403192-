# Financial Forecasting Tool

This project is a simple financial forecasting tool that calculates the future value of an investment based on the current value, annual growth rate, and number of years.

---

## Understanding Recursive Algorithms

### Recursion Concept
Recursion is a programming technique where a method calls itself repeatedly until it reaches a base case that stops the recursion.  
It simplifies certain problems by breaking them down into smaller sub-problems of the same type, which are easier to solve.  
In this financial forecasting tool, recursion is used to calculate the future value by applying the growth rate for each year until the target year is reached.

---

## Implementation

### Recursive Future Value Calculation
A method `predictFutureValue` is implemented to compute the future value of an investment recursively.  
It takes three parameters:
- `currentValue` (the current investment value)
- `rate` (the annual growth rate as a decimal)
- `years` (the number of years for forecasting)

The method:
- Returns `currentValue` when `years` is `0` (base case).
- Otherwise, applies the growth rate and calls itself with `years - 1`.

### Time Complexity
The time complexity of this recursive algorithm is `O(n)`, where `n` is the number of years.  
Each recursive call reduces the problem size by `1`, resulting in `n` recursive calls.

### Optimization
This solution can be optimized:
- **Memoization**: Store results of previous calculations to avoid recomputation.
- **Iterative approach**: Use a loop instead of recursion for better efficiency on large inputs.
- **Direct formula**: Use the compound interest formula for an instant result

### Output 
![image alt text](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/blob/a81602a84dbbf4ef4ff05197e5277c36c2333535/Week_1/Data_structures_and_algorithms/Financial%20Forecasting/Output/Output1.png)
