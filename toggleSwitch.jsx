import { useState } from "react";


export default function App() {

	const [toggle,setToggle] = useState(true)

	const handleOnClick=()=>{

		setToggle(!toggle)

	}
	const buttonStyle = {
		backgroundColor: toggle ? "black" : "lightgray",
		color: toggle ? "white" : "black",
	}

	return (
		<>
			<h1>Toggle Switch</h1>

			<button id="toggle" className={`toggle ? `} style={buttonStyle} onClick={handleOnClick} >{toggle ? "on" : "off"}</button>
		</>
	);

	}