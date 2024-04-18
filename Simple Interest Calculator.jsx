
import { useState } from "react";
export default function App() {

const [principal,setPrincipal] = useState(1000)
const [rate,setRate] = useState(7)
const [time,setTime] = useState(5)

const simpleInterest = (principal*rate*time)/100;
const totalAmount = parseInt(principal) + parseInt (simpleInterest)

	return (
		<>
			<input id="principal" onChange={(e)=>{setPrincipal(e.target.value)}} placeholder="principal" value={principal} type="number" ></input>
			<input id="rate" placeholder="rate" value={rate} type="number" ></input>
			<input id="time" placeholder="time" value={time} type="number" ></input>

			<div id="simpleInterest" >
				<h1> {simpleInterest}</h1>
			</div>
			<div id="totalAmount" >
			{totalAmount}
			</div>
			
			
		</>
	);
}
