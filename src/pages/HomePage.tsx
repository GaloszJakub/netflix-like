import '../index.css'

import WelcomePage from '../components/WelcomePage.tsx'
import Features from '../components/Features.tsx'
import CarouselSection from '../components/Carousel.tsx'
import QuestionsSections from '../components/QuestionsSection.tsx'
import Footer from '../components/Footer.tsx'


export default function HomePage() {
	return (
		<div>
			<WelcomePage />
			<CarouselSection />
			<Features />
			<QuestionsSections />
			<Footer />
			
		</div>
	)
}
