import { useState } from 'react'
export default function App() {
	const [seconds, setseconds] = useState("")
	const [stopbutton, setstopbutton] = useState(true)
	const [timer, settimer] = useState(0)

	let intervalId = null

	function handleStart() {
		if (!seconds || seconds < 1) {
			return
		}
		setstopbutton(false)
		intervalId= setInterval(()=>{
			const oldTimer = parseInt(timer)
			settimer(oldTimer=>{ 
				if (oldTimer < seconds){
				return parseInt(oldTimer)+1}
				else {
					handleStop()
					return oldTimer}
		}
		
		)
		
		},1000)
	}

	function handleStop(){
		setstopbutton(true)
		clearInterval(intervalId)
	}

	return (
		<>
			<h1>Hello there!</h1>
			<input
				type="number"
				id="seconds-input"
				className="border border-black rounded px-2 m-1 "
				placeholder="seconds"
				value={seconds}
				onChange={(e) => setseconds(e.target.value)}
			/>
			<br />
			<button
				id="start"
				className="border border-black rounded px-2 m-2 "
				disabled={!stopbutton}
				onClick={handleStart}
			>
				start
			</button>
			<br />

			<button
				id="stop"
				className="border border-black rounded px-2 m-2 "
				disabled={stopbutton}
				onClick={handleStop}
			>
				stop
			</button>

			<div id="timer" className="flex justify-center">
				{timer}
			</div>
		</>
	)
}
