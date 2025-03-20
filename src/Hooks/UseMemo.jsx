// Notes on useMemo Hook

// useMemo is a React Hook used to optimize performance by memoizing the result of an expensive calculation.
// It only recalculates the result when its dependencies change, reducing unnecessary recalculations.

// Syntax:
// const memoizedValue = useMemo(() => {
//   return expensiveCalculation();
// }, [dependency1, dependency2]);

// Explanation:
// 1. useMemo takes two arguments: a function and a dependency array.
// 2. The function contains the expensive computation whose result you want to memoize.
// 3. The dependency array controls when the function should run. It re-runs if any dependency changes.

// Example:
import React, { useMemo, useState } from "react";

const factorial = (n) => {
  console.log("Calculating factorial...");
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

const UseMemoExample = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(5);

  // Memoizing the factorial result
  const memoizedFactorial = useMemo(() => factorial(num), [num]);

  return (
    <div>
      <h1>
        Factorial of {num}: {memoizedFactorial}
      </h1>
      <button onClick={() => setCount(count + 1)}>Re-render {count}</button>
      <button onClick={() => setNum(num + 1)}>Increase Number</button>
    </div>
  );
};

export default UseMemoExample;

// Key Points to Remember:
// - useMemo is useful for avoiding unnecessary recalculations of expensive operations.
// - It is not a replacement for all state or rendering optimizations.
// - Avoid overusing useMemo; React's default rendering is already efficient for most cases.
// - For component memoization, consider using React.memo instead.
