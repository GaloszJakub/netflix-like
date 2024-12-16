import React, { useEffect, ReactNode, useState } from 'react'
import Cookies from 'js-cookie'

interface ComboBoxProps {
	options: string[]
}

export const ComboBox: React.FC<ComboBoxProps> = ({ options }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedOption, setSelectedOption] = useState<string>(Cookies.get('language') || 'Polski')

	const handleOptionClick = (option: string) => {
		Cookies.set('language', option, { expires: 7, path: '/' })
		setSelectedOption(option)
		setIsOpen(false)
		window.location.reload()
	}

	return (
		<div className="relative mx-auto ">
			<input
				type="text"
				value={selectedOption}
				onClick={() => setIsOpen(!isOpen)}
				placeholder="Wybierz język"
				readOnly
				className="min-w-[50%] w-[100%] pl-4 py-2 bg-black/75 border hidden sm:block border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 cursor-pointer"
			/>
			{isOpen && (
				<ul className="absolute min-w-[50%] w-full mt-1 bg-white border text-black border-gray-200 rounded-md shadow-md z-10 max-h-40 overflow-auto">
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

interface CardProps {
	title: string
	content: string
	icon: ReactNode
}

export const GradientCard: React.FC<CardProps> = ({ title, content, icon }) => {
	return (
		<div className="flex flex-col bg-gradient-to-br from-blue-950 via-purple-950 to-black p-4 lg:p-8 rounded-xl">
			<h2 className="text-2xl font-bold pb-2 lg:pb-8 text-white">{title}</h2>
			<p className="pb-8 text-gray-400">{content}</p>
			<span className="ml-auto">{icon}</span>
		</div>
	)
}

interface ProfileCardProps {
	background: string
	name: string
	onClick: () => void
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ background, name, onClick }) => {
	return (
		<div className="group cursor-pointer" onClick={onClick}>
			<a href="videos">
				<div
					style={{ backgroundImage: `url(${background})` }}
					className="w-36 h-36 bg-cover bg-center group-hover:ring-white group-hover:ring-2"></div>
				<div className="text-center text-[#808080] group-hover:text-white mt-2">{name}</div>
			</a>
		</div>
	)
}
interface CarouselProps {
	items: React.ReactNode[] // Lista elementów do wyświetlenia w karuzeli
	itemsPerGroup?: number // Liczba elementów w jednej grupie
	autoScroll?: boolean // Czy karuzela ma automatycznie przewijać
	interval?: number // Interwał automatycznego przewijania (w ms)
}

export const Carousel: React.FC<CarouselProps> = ({
	items,
	itemsPerGroup = 6,
	autoScroll = false,
	interval = 3000,
}) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const totalGroups = Math.ceil(items.length / itemsPerGroup)

	// Grupowanie elementów
	const groupedItems = []
	for (let i = 0; i < items.length; i += itemsPerGroup) {
		groupedItems.push(items.slice(i, i + itemsPerGroup))
	}

	// Obsługa przewijania do przodu
	const nextSlide = () => {
		setCurrentIndex(prevIndex => (prevIndex + 1) % totalGroups)
	}

	// Obsługa przewijania wstecz
	const prevSlide = () => {
		setCurrentIndex(prevIndex => (prevIndex === 0 ? totalGroups - 1 : prevIndex - 1))
	}

	// Automatyczne przewijanie
	useEffect(() => {
		if (!autoScroll) return

		const timer = setInterval(() => {
			nextSlide()
		}, interval)

		return () => clearInterval(timer) // Czyścimy timer przy unmount
	}, [autoScroll, interval])

	return (
		<div className="relative w-screen n">
			<div
				className="flex flex-nowrap transition-transform duration-300 group ease-in-out"
				style={{
					transform: `translateX(-${currentIndex * 100}%)`,
				}}>
				{groupedItems.map((group, groupIndex) => (
					<div key={groupIndex} className="flex w-screen shrink-0 flex-nowrap ">
						{group.map((item, index) => (
							<div
								key={index}
								className={`w-[15%] mx-1 flex-shrink-0 `}>
								{item}
							</div>
						))}
					</div>
				))}
			</div>

			<button
				onClick={prevSlide}
				className="absolute  -left-8 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
				◀
			</button>
			<button
				onClick={nextSlide}
				className="absolute right-24 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
				▶
			</button>
		</div>
	)
}
