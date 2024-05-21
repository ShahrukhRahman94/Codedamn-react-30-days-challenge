import React, { useEffect, useState } from 'react'

function Counter() {
	const counter = parseInt(localStorage.getItem('count')) || 0
	const [count, setCount] = useState(counter)

	useEffect(() => {
		localStorage.setItem('count', count)
	}, [count])

	return (
		<div>
			<h2 data-testid="count-id">Count: {count}</h2>
			<button data-testid="inc-id" onClick={() => setCount(count + 1)}>
				+
			</button>
			<button data-testid="dec-id" onClick={() => setCount(count - 1)}>
				-
			</button>
			<button onClick={()=>setCount(count*0)}>reset</button>
		</div>
	)
}

export default Counter
