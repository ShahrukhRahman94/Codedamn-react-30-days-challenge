
import { useState } from 'react'

export default function App() {
	const [currentPalette, setCurrentPalette] = useState([])
	const [savedPalettes, setSavedPalettes] = useState([])

	const generateRandomHexCode = () => {
		const randomColor = Math.floor(Math.random() * 16777215).toString(16)
		return '#' + randomColor
	}

	const generateRandomId = () => {
		return Math.random().toString(36).substring(2, 9)
	}

	const handleGenerateRandomPalette = () => {
		const currentPaletteList = []
		for (let i = 0; i < 5; i++) {
			const color = generateRandomHexCode()
			const id = generateRandomId()
			currentPaletteList.push(
				<div
					key={id}
					className="color-block"
					style={{ backgroundColor: color }}
				>
					{color}
				</div>
			)
		}
		setCurrentPalette(currentPaletteList)
	}

	const handleSavePalette = () => {
		setSavedPalettes([...savedPalettes, currentPalette])
		setCurrentPalette([])
	}

	const handleDeletePalette = (index) => {
		const updatedPalettes = savedPalettes.filter((_, i) => i !== index)
		setSavedPalettes(updatedPalettes)
	}

	return (
		<>
			<h2>Color Palette Generator App</h2>
			<button id="generate" onClick={handleGenerateRandomPalette}>
				Generate
			</button>
			<div className="block" id="current-palette">
				{currentPalette}
				<button id="save" onClick={handleSavePalette}>
					Save Palette
				</button>
			</div>
			<div className="block" id="saved-palettes">
				{savedPalettes.map((palette, index) => (
					<div key={index}>
						{palette.map((colorBlock, i) => (
							<div
								key={i}
								className="color-block"
								style={{
									backgroundColor:
										colorBlock.props.style.backgroundColor
								}}
							>
								{colorBlock.props.children}
							</div>
						))}
						<button
							className="delete-palette-button"
							onClick={() => handleDeletePalette(index)}
						>
							Delete
						</button>
					</div>
				))}
			</div>
		</>
	)
}