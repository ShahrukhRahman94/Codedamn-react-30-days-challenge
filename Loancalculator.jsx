import { useState } from 'react'
export default function App() {
	const [loan, setLoan] = useState(null)
	const [emi, setEmi] = useState(null)
	const [output, setOutput] = useState(null)

	const handleBtnClicked = () => {
		const calculate = (loan/emi)
		setOutput(calculate.toFixed(2))
	}




	return (
		<>
			<h1>Loan Calculator</h1>
			<div className="flex flex-col px-5 my-5">
				<input
					type="number"
					className="border"
					onChange={(e) => {setLoan(e.target.value)}}
					placeholder="loan amount"
					id="totalCost"
				/>
				<input
					type="number"
					className="border my-3"
					placeholder="no of monthly payments"
					onChange={(e) => {setEmi(e.target.value)}}
					id="numberOfIntervals"
				/>
			</div>
			<button id="calculate"
			onClick={handleBtnClicked}
			className="border border-black ">
				Calculate
			</button>

			<div id="output" className="px-3 py-3">{output}</div>
		</>
	)
}
