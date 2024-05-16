import { useState } from "react"

export default function App() {

	const [hidden,SetHidden] = useState('')

	const handleOnClick=(i)=>{

		SetHidden(i)

	}

	let accordian = []

	for (let i = 0; i < 4; i++) {
		accordian.push(
			<div className="accordion border border-black m-3 "
			onClick={(e)=>handleOnClick(i)}
			>
				<div className="question p-2 bg-black text-white ">
					Question {i + 1}
				</div>
				<div className={`answer p-2` + (hidden != i ? ` hidden` : '')}>Answer {i + 1}</div>
			</div>
		)
	}

	return <>{accordian}</>
}
