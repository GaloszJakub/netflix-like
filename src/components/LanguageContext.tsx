import React, { createContext, useState, useEffect, useContext } from 'react'
import Cookies from 'js-cookie'

type Language = 'Polski' | 'English'

interface LanguageContextType {
	language: Language
	setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [language, setLanguage] = useState<Language>('Polski') // Domyślny język

	useEffect(() => {
		const savedLanguage = Cookies.get('language') as Language
		if (savedLanguage) {
			setLanguage(savedLanguage)
		}
	}, [])

	const handleSetLanguage = (lang: Language) => {
		setLanguage(lang)
		Cookies.set('language', lang)
	}

	return (
		<LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>{children}</LanguageContext.Provider>
	)
}

export const useLanguage = () => {
	const context = useContext(LanguageContext)
	if (!context) {
		throw new Error('useLanguage must be used within a LanguageProvider')
	}
	return context
}
