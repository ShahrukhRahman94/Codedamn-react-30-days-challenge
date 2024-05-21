import { useState } from 'react'

export default function App() {
	const [presentDate, setPresentDate] = useState('')
	const [displayDate, SetDisplayDate] = useState('')
	const [error, setError] = useState('')

	const handleOnClick = () => {
		setError(null)
		const today = new Date();
		const future = new Date(presentDate)
		const NoOfDays = parseInt((future-today)/(1000*60*60*24))
		if(NoOfDays >=0){
			setError(null)
			SetDisplayDate(NoOfDays)
		}else{
			SetDisplayDate(null)
			setError("Error: Past Date Entered")
		}
		
	}

	return (
		<>
			<h1>Days Until Element</h1>
			<input
				type="date"
				id="datePicker"
				onChange={(e) => setPresentDate(e.target.value)}
			/>
			<button
				id="findDays"
				className=" mx-5 px-7  border border-black"
				onClick={handleOnClick}
			>
				Find Days
			</button>
			<span id="daysLeft">{displayDate}</span>  
			<div id="error">{error}</div>
			
			
		</>
	)
}
