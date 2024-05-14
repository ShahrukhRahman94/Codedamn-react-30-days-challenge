import { parse } from "postcss";
import { useState } from "react"

export default function App() {

const [bill,setBill] = useState('')
const [tip,setTip] = useState('')
const [total,settotal] = useState('')

function handlebillchange(e){
	e.preventDefault();
	parseInt(setBill(e.target.value))
		console.log(bill)
}

function handletipchange(e){
	e.preventDefault();
		parseInt(setTip(e.target.value))
		console.log(tip)
}

 const handleOnClick =()=>{

	 const Amount = (parseInt(bill)+parseInt(tip))

		settotal(Amount.toFixed(2))

 }

	return (
		<>
			<h1>Hello there!</h1>
			<div className=" flex flex-col py-3 m-3">
				<input
					id="billAmount"
					className="border border-black"
					type="text"
					value={bill}
					onChange={handlebillchange}
					placeholder="enter bill amount"
				/>
				<input
					id="tipPercent"
					className="border border-black "
					type="text"
					value={tip}
					onChange={handletipchange}
					placeholder="enter tip %"
				/>
			</div>
			<button
				id="calculateAmount"
				className="border border-black-700 bg-blue-300 mx-10"
				onClick={handleOnClick}
			>
				calculate
			</button>

			<div id="totalAmount">{total}</div>
		</>
	)
}
