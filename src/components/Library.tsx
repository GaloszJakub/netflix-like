import { useState } from 'react'

interface ComboBoxProps {
	options: string[]
}

const ComboBox: React.FC<ComboBoxProps> = ({ options }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedOption, setSelectedOption] = useState<string>('')
	const handleOptionClick = (option: string) => {
		setSelectedOption(option)
		setIsOpen(false)
	}

	return (
		<div className="relative  mx-auto">
			<input
				type="text"
				value={selectedOption}
				onClick={() => setIsOpen(!isOpen)}
				placeholder="Język"
				readOnly
				className="min-w-[50%] w-[80%] pl-4 py-2 bg-black/75 border hidden sm:block border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 cursor-pointer"
			/>
			<input
				type="text"
				value={selectedOption}
				onClick={() => setIsOpen(!isOpen)}
				placeholder="A"
				readOnly
				className="min-w-[50%] w-[80%] pl-4 py-2 bg-black/75 border sm:hidden block border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 cursor-pointer"
			/>

			{/* Lista opcji */}
			{isOpen && (
				<ul className="absolute min-w-[50%] w-[80%] lg:w-full mt-1 bg-white border text-black  border-gray-200 rounded-md shadow-md z-10 max-h-40 overflow-auto">
					{options.map((option, index) => (
						<li
							key={index}
							onClick={() => handleOptionClick(option)}
							className="px-4 py-2 hover:bg-gray-400 cursor-pointer">
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default ComboBox
