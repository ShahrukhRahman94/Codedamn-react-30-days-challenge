import { useState } from "react";
import "./App.css";

function App() {
	const [cel, setCel] = useState("0");
	const [fahr, setFahr] = useState("0");

	const handleOnCelsius = (e) => {
		setCel(e.target.value);
		const fahrenheit = (cel * 9/5) + 32;
		setFahr(fahrenheit);
	}

	const handleOnFahrenheit = (e) => {
		setFahr(e.target.value);
		const celsius = (fahr - 32) * 5/9;
		setCel(celsius);
	}	

	return (
		<>
		    <h2>Temperature Converter</h2>
			<input id="celsius" type="number" value={cel} onChange={handleOnCelsius}></input>
			<input id="fahrenheit" type="number" value={fahr} onChange={handleOnFahrenheit}></input>
			<div className="card">
				
			</div>
		</>
	);
}

export default App;