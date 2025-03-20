import React, { useContext } from "react";
import { AuthContext } from "./Provider";

const Consumer = () => {
  const { isLoggedin, logIn, logOut, data } = useContext(AuthContext);

  return (
    <div>
      <h1>{data.name}</h1>
      <p>Status: {isLoggedin ? "Logged in" : "Logged out"}</p>
      <button onClick={logIn}>Log In</button>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default Consumer;
