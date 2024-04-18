import { useState } from 'react'

export default function App() {
	const [start, setStart] = useState('')
	const [end, setEnd] = useState('')
	const [random, setRandom] = useState('')

	const handleButtonClicked = () => {
		
		console.log(start)
		const startId = parseInt(start);
		const endId = parseInt(end);

		if (
			isNaN(startId) ||
			isNaN(endId) ||
			startId.length === 0 ||
			endId.length === 0
		) {
			setRandom('Invalid Input')
		} 
		else {
			const randomNumber = Math.floor(Math.random() *(endId- startId)+startId);
			setRandom(randomNumber)
		}	
	}

	return (
		<>
			<h1>Hello there!</h1>
			<input
				id="startRange"
				placeholder="startrange"
				value={start}
				onChange={(e) => setStart(e.target.value)}
				type="number"
			></input>

			<input
				id="endRange"
				placeholder="endrange"
				onChange={(e) => setEnd(e.target.value)}
				value={end}
				type="number"
			></input>
			<div>
				<button id="generate" onClick={handleButtonClicked}>
					generate
				</button>
			</div>
			<div id="randomNumber">{random}</div>
		</>
	)
}

