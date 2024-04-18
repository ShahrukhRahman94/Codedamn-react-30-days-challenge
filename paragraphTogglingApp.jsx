import {useState} from "react"

function App() {

 const [para ,setPara] = useState(true)

	const handleButtonClicked = ()=> {

			return setPara(!para)
	}

	return (
		<div>
			{para ?<p id="my-paragraph">This is the paragraph you can toggle.</p>: null }
			

			<button id="toggle-btn" onClick={handleButtonClicked}>Toggle Paragraph</button>
		</div>
	);
}

export default App;
