import { useState } from "react"

export default function App() {

	const [fromUnit, setFromUnit] = useState(null)
	const [toUnit, setToUnit] = useState(null)
	const [finalValue, setFinalValue] = useState(null)
	

	const  handleOnClick = ()=> {

		fetch('https://open.er-api.com/v6/latest/' + fromUnit)
  .then(response => response.json())
  .then(data => {
    const rate = data.rates[toUnit]; 
    const convertedValue = 1 * rate; 
	setFinalValue(convertedValue)

  });

	}

	return (
		<>
			<h1>Hello there!</h1>
			<input type="text" id="from" maxlength="3" placeholder=" USD" onChange={(e)=>setFromUnit(e.target.value)} />
			<input type="text" id="to" maxlength="3" placeholder=" EUR" onChange={(e)=>setToUnit(e.target.value)} />
			<button id="convert" className="border" onClick={handleOnClick} >Convert</button>
			<div id="currencyValue">{finalValue}</div>
		</>
	)
}
