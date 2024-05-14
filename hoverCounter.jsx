import { useState } from "react"

const App = () => {
	// Edit this component

 const [count,setCount] = useState(0)

 function hoverbutton () {

	setCount
 }

	return (
		<div>
			<button onMouseEnter={(e)=>(setCount(count+1))} data-testid="button">Hover Me</button>
			<h1 data-testid="count">{count}</h1>
		</div>
	)
}

export default App
