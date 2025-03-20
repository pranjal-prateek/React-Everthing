// Importing necessary hooks
import { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);

  // useEffect hook with dependency [count]
  useEffect(() => {
    console.log("hellloo guysss"); // Logs on component mount and when count changes
    if (count === 3) {
      throw new Error("looginf error bad error ");
    }
    // Defining the event listener function
    const handleClick = () => console.log("clicked");

    // Adding event listener
    window.addEventListener("click", handleClick);

    // Cleanup function: Removes the event listener to prevent memory leaks
    return () => {
      console.log("removed listener");
      window.removeEventListener("click", handleClick);
    };
  }, [count]); // Dependency array with 'count'

  const countIncrement = () => setCount((prev) => prev + 1);

  return <button onClick={countIncrement}>OnClick Check Console</button>;
};

export default UseEffectHook;

// Notes:
// - useEffect runs after the component renders.
// - It is often used for data fetching, subscriptions, or manually changing the DOM.
// - The optional cleanup function is used to remove side effects like event listeners or timers.
// - When the dependency array is empty ([]), it runs only once on mount.
// - When dependencies are specified ([count]), it re-runs whenever the dependency changes.
// - Incorrect cleanup or missing cleanup can cause memory leaks.
// - Ensure functions in addEventListener and removeEventListener are the same to clean up effectively.
