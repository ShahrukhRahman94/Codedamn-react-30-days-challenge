import { useState } from "react";

export default function Counter() {
	const [number, setNumber] = useState(0);

	const handleButtonClicked = () => {

			return setNumber(number+3);

	}

	return (
		<>
			<div className="card">
				<h1 data-testid="counter">{number}</h1>
				<button
					data-testid="incrementButton"
					onClick={handleButtonClicked}
				>
					Increment 3 times
				</button>
			</div>
		</>
	);
}
