import { useState } from 'react'

export default function App() {
	const [emoji, setemoji] = useState(null)
	const [text, setText] = useState(null)

	const emojis = ['😍', ' 😀', '🙁', '😭']

	function handleOnSubmit() {
		console.log(emoji, text)
	}

	return (
		<>
			<h1>Rating Component</h1>
			<div id="feedback">

			{emojis.map((item)=><button onClick={(e) => setemoji(e.target.value)}>{item}</button>)}

			</div>
			<div className={`flex flex-col` + (emoji == null ? ` hidden` : '')}>
				<textarea
					id=""
					onChange={(e) => setText(e.target.value)}
					className="border border-black-700 m-3 rounded "
				></textarea>
				<button
					id="submit"
					onClick={handleOnSubmit}
					className="border rounded-s text-white py-1 m-3 bg-blue-500"
				>
					Submit
				</button>
			</div>
		</>
	)
}
