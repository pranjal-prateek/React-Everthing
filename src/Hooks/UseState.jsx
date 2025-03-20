// Importing the useState hook from React
import { useState } from "react";

const UseState = () => {
  // useState hook is used to declare a state variable 'count' with an initial value of 0
  // setCount is a function that updates the value of 'count'
  const [count, setCount] = useState(0);

  // Increment function: Updates state using the previous state value (prev)
  const increment = () => setCount((prev) => prev + 1);

  // Decrement function: Similar to increment, but subtracts 1 from the state
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <div>
      {/* Decrement button - Calls the decrement function on click */}
      <button type="button" onClick={decrement}>
        Decrement
      </button>

      {/* Displaying the current count value */}
      {count}

      {/* Increment button - Calls the increment function on click */}
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
};

export default UseState;

// Notes:
// - useState is used to create state variables in functional components.
// - Always use the setState function (e.g., setCount) to update state instead of modifying state directly.
// - React re-renders the component whenever state changes, displaying the updated value.
// - Using the previous state value with functions like (prev) => prev + 1 ensures correct state updates, especially when multiple updates happen quickly.
// - This component uses a simple counter example to demonstrate useState functionality.
