import { useState } from 'react'

export default function App() {
	const [tableValues, SetTableValues] = useState([])
	const [inputVal, setInputVal] = useState(null)

	const handleBtnClicked = () => {

		const newInput = parseInt(inputVal)

		const table = []
		for (let i = 1; i <= 20; i++) {
			table.push(i * newInput)
		}
		console.log(table)
		SetTableValues(table)
	}

	return (
		<>
			<h1>Multiplication Table Generator</h1>
			<input
				type="number"
				className="border border-black flex px-10 mx-4 my-5"
				onChange={(e) => setInputVal(e.target.value)}
				placeholder="enter number"
				id="number"
			/>
			<button
				id="generateTable"
				className="border border-black flex flex-col px-5 mx-4 my-5"
				onClick={handleBtnClicked}
			>
				Generate Table
			</button>
			{tableValues && <ul id='multiplicationTable'>
			{tableValues.map((num,index) => (
				<li key={num}>{num}</li>
			))}
			</ul>}
			
		</>
	)
}
