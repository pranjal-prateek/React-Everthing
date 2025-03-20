import React, { useLayoutEffect, useRef, useState } from "react";

const LayoutEffectExample = () => {
  const boxRef = useRef(null);
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (boxRef.current) {
      const { width, height } = boxRef.current.getBoundingClientRect();
      setBoxSize({ width, height });
    }
  }, []);

  return (
    <div>
      <div
        ref={boxRef}
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "lightblue",
          marginBottom: "20px",
        }}
      >
        Resize me!
      </div>
      <p>Width: {boxSize.width}px</p>
      <p>Height: {boxSize.height}px</p>
    </div>
  );
};

export default LayoutEffectExample;
