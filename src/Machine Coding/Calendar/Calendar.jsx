import { useState } from "react";
import './calendar.css';
const  Calendar =()=>{
const [date,setDate] = useState(new Date())
const weeKDays = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
console.log(date);
const handlePrevMonth =()=>{
  setDate((prevDate)=>new Date(prevDate.getFullYear(),prevDate.getMonth()-1,1))
}
const handleNextMonth =()=>{
  setDate((prevDate)=>new Date(prevDate.getFullYear(),prevDate.getMonth()+1,1)
  )
}

const renderDaysInMonth =()=>{
  const month =date.getMonth();
  const year = date.getFullYear();

// Get the first day of the month (0 = Sunday, 1 = Monday, etc.)
  const firstDay = new Date(year,month,1).getDay();
  // Get the number of days in the month
  const totalDays = new Date(year,month+1,0).getDate();

  const days = [];

  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={`empty-${i}`} className="empty-day"></div>);
  }
  for (let day = 1; day <= totalDays; day++) {
    days.push(
      <div
        key={day}
        className="day"
        onClick={() => alert(`Selected date: ${day}/${month + 1}/${year}`)}
      >
        {day}
      </div>
    );
  }
  const totalCells = days.length;
  const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
  for (let i = 0; i < remainingCells; i++) {
    days.push(<div key={`empty-end-${i}`} className="empty-day"></div>);
  }

  return days;
}


  return(
    <>
    <div className="calendar">
      <h2>Calendar</h2>
      <header>
         <button onClick={handlePrevMonth}>{"<"}</button>
         <h2>{`${date.toLocaleString('default', { month: 'short' })} - ${date.getFullYear()}`}</h2>
         <button onClick={handleNextMonth}>{">"}</button>
      </header>
      <div className="days-of-week">
        {weeKDays.map((item,_)=>{
          return <div key={item}>{item}</div>
        })}
      </div>
      <div className="days">{renderDaysInMonth()}</div>
    </div>
    </>
  )
} 
export default Calendar;