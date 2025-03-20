import { useReducer, useState } from "react";
import { reducer } from "./Reducer";

const initialvalue = { count: 0 };

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialvalue);
  const [value, setValue] = useState(1);

  const increment = () =>
    dispatch({ type: "INCREMENT", payload: Number(value) });
  const decrement = () =>
    dispatch({ type: "DECREMENT", payload: Number(value) });

  return (
    <>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={decrement}>Decrement by {value}</button>
      <span>{state.count}</span>
      <button onClick={increment}>Increment by {value}</button>
    </>
  );
};

export default UseReducer;
