import React, { useState  , useEffect} from 'react'
import "./DateTime.css"

function DateTime() {

    const months = ["January" , "February" , "March" , "April" , "May" , "June" ,  "July" , "August" , "September" , "October" , "November" , "December"]
    const days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" ]

    const currentDate = new Date()

    const date = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    const day = days[currentDate.getDay()];

    let time = new Date();
    const [currentTime , setCurrentTime] = useState(time);
    

    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let second = currentTime.getSeconds();
    let amORpm  = hour < 12 ? 'AM' : 'PM'
    let twelvehour = hour > 12 ? hour-12 : hour;
    let twelveMinute = minute < 10 ? `0${minute}` : minute;
    let twelveSecond = second < 10 ? `0${second}` : second;

    useEffect(() => {
      const updateTime = setInterval(() => setCurrentTime(new Date()) , 1000);
      return () => clearInterval(updateTime)
    },[])

  return (
    <>
    <div className='container'>

    <div className="day">{day}</div>
    <br />
    <div className='time'><span>{twelvehour} : {twelveMinute} : {twelveSecond} {amORpm}</span> </div>
    <br />
    <div className='date'>{month} {date} {year}</div>
    

    </div>    
    </>
)
}

export default DateTime