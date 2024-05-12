import { useState } from "react";

export default function App() {

	const [count,setCount] = useState(0)
	return (
		<>
			<h1>Dynamic character Counter</h1>
			<textarea  
			id="textInput"
			 onChange={(e)=>setCount(e.target.value.length)}
			 >
			
			 </textarea>

			<div id="count">{count}</div>
		</>
	);
}
