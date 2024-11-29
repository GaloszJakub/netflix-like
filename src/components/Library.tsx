import React, { useState, ReactNode } from 'react'
import { useLanguage } from './LanguageContext'

interface ComboBoxProps {
	options: string[]
}

export const ComboBox: React.FC<ComboBoxProps> = ({ options }) => {
	const { language, setLanguage } = useLanguage()

	return (
		<select
			value={language}
			onChange={e => setLanguage(e.target.value as 'Polski' | 'English')}
			className="bg-white border rounded-md px-2 py-1">
			{options.map(option => (
				<option key={option} value={option}>
					{option}
				</option>
			))}
		</select>
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
