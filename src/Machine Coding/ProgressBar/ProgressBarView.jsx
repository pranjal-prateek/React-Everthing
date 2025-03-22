import { useEffect, useState } from "react"
import styles from './progressbar.module.css'
const ProgressBarView =({value})=>{

  const [percentage,setPercentage] = useState(value)

  useEffect(()=>{
    setPercentage(Math.min(100, Math.max(value, 0))); // Ensure within 0-100
  },[value])

  const textColor = percentage >= 50 ? "white" : "black";

  return(
    <div className={styles.progressBar}>
     <span style={{ color: textColor }}>{String(percentage)}%</span>
      <div className={styles.progressActive} style={{width:`${percentage}%`}}></div>
    </div>
  )
}
export default ProgressBarView