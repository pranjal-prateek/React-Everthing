import { forwardRef } from "react";

const ForwardRef = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});
export default ForwardRef;
