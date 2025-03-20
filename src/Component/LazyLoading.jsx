//so lazy loading is a way in which we load component when they are required not not at the 1st load

import React from "react";

const LazyComponent = () => {
  return (
    <div>
      <h2>This is a Lazily Loaded Component!</h2>
    </div>
  );
};

export default LazyComponent;
