import { useEffect, useState } from "react";
import ProgressBarView from "./ProgressBarView";
const ProgressBar =()=>{
const [value,setValue] =useState(0);
useEffect(() => {
  const interval = setInterval(() => {
    setValue((val) => val + 1);
  }, 100);
  return () => clearInterval(interval);
}, []);

return (
  <>
    <ProgressBarView value={value} />
  </>
);

}
export default ProgressBar