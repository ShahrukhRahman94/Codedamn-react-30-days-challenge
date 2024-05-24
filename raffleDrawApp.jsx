

import { useState } from 'react'

export default function App() {
	const [names, setNames] = useState([])
	const [pickedNames, setPickedNames] = useState([])
	const [pickedName, setPickedName] = useState('')
	const [inputVal, setInputVal] = useState('')

	const handleEnterKeyDown = (e) => {
		if (e.key === 'Enter') {
			setNames([inputVal, ...names])
			setInputVal('')
		}
	}

	const handlePickName = () => {
		if (names.length === 0) return

		const randomPickIndex = getRandomNumber(names.length)
		const pickedItem = names[randomPickIndex]
		setPickedName(pickedItem)

		const newList = names.filter((name) => name !== pickedItem)
		setNames(newList)

		setPickedNames([pickedItem, ...pickedNames])
	}

	const getRandomNumber = (maxNumber) => {
		return Math.floor(Math.random() * maxNumber)
	}

	return (
		<>
			<h2>Raffle Draw App</h2>
			<input
				id="nameInput"
				type="text"
				onKeyDown={handleEnterKeyDown}
				value={inputVal}
				onChange={(e) => setInputVal(e.target.value)}
			/>
			<p>
				<button id="pick" onClick={handlePickName}>
					Pick a Name
				</button>
			</p>

			<h3>Names List</h3>
			<div id="nameList">
				{names.map((name, index) => (
					<span className="name" key={index}>
						{name}
						{', '}
					</span>
				))}

				<h3>Picked Names List</h3>
				<div id="pickedList">
					{pickedNames.map((name) => (
						<span className="name" key={name}>
							{name}
							{', '}
						</span>
					))}
				</div>
			</div>

			{pickedName && (
				<dialog id="nameDialog" open>
					<p>
						<b>Picked Name:</b> {pickedName}
					</p>
				</dialog>
			)}
		</>
	)
}

