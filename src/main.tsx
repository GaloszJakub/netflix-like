import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import WelcomePage from './components/WelcomePage.tsx'
import Features from './components/Features.tsx'
import CarouselSection from './components/Carousel.tsx'
import QuestionsSections from './components/QuestionsSection.tsx'
import Footer from './components/Footer.tsx'

import { LanguageProvider } from './components/LanguageContext' // Dostosuj

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<LanguageProvider>
			<WelcomePage />
			<CarouselSection />
			<Features />
			<QuestionsSections />
			<Footer />
		</LanguageProvider>
	</StrictMode>
)
