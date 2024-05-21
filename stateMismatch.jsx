import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="card">{count}</div>
			<button
				id="increment"
				data-testid="incrementBtn"
				onClick={() => {
					setCount((count) => {
						const newCount = count + 1;
						console.log(`newCount: ${newCount}`)
						return newCount
						});

					;
				}}
			>
				Increment
			</button>
		</>
	);
}

export default App;
