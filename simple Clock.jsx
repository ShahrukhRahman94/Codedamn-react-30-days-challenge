import { useEffect } from "react";
import { useState } from "react";

const days = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
]
const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
]

export default function App() {

	const [date,setDate] = useState(new Date())

	useEffect((()=>{
		setInterval(()=>{
			setDate(new Date())
		},1000)
		
	}),[])

	return (
		<>	
		
			<div id="day">{days[date.getDay()]}</div>
			<div id="date">{months[date.getMonth()]} {date.getDate()}, {date.getFullYear()}</div>
			<div id="time">
				{date.getHours().toString().padStart(2,"0")}{':'}{date.getMinutes().toString().padStart(2, "0")}{':'}
				{date.getSeconds().toString().padStart(2,"0")}
			</div>
		</>
	);
}
