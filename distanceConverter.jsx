import { useState } from 'react'

export default function App() {
	// You can make use of this object to construct the select elements and the conversion
	const conversionRates = {
		centimeters: 1,
		inches: 2.54,
		feet: 30.48,
		meters: 100,
		kilometers: 100000,
		miles: 160934.4
	}

	const [fromUnit, setFromUnit] = useState(null)
	const [toUnit, setToUnit] = useState('')
	const [input, setInput] = useState('')
	const [finalOutput, setFinalOutPut] = useState('0')

	function handleOnClick() {
		const conversion = input * conversionRates[fromUnit]
	

		const finalConversion = conversion / conversionRates[toUnit]

		setFinalOutPut(finalConversion.toFixed(3))
	}

	return (
		<>
			<h1>Hello there!</h1>
			<select id="fromUnit" onChange={(e) => setFromUnit(e.target.value)}>
				<option value="centimeters">Centimeter</option>
				<option value="inches">Inches</option>
				<option value="miles">Miles</option>
				<option value="Feet">Feet</option>
				<option value="kilometers">Kilometers</option>
				<option value="meters">Meters</option>
			</select>
			<select id="toUnit" onChange={(e) => setToUnit(e.target.value)}>
				<option value="centimeter">Centimeter</option>
				<option value="inches">Inches</option>
				<option value="miles">Miles</option>
				<option value="feet">Feet</option>
				<option value="kilometers">Kilometers</option>
				<option value="meters">Meters</option>
			</select>

			<input
				type="number"
				id="fromValue"
				placeholder="enter you distance "
				className="border"
				onChange={(e) => setInput(e.target.value)}
			/>
			<button id="convert" className="border" onClick={handleOnClick}>
				{' '}
				convert
			</button>
			<div id="outputValue">{finalOutput}</div>
		</>
	)
}
