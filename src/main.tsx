import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import WelcomePage from './components/WelcomePage.tsx'
import Features from './components/Features.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<WelcomePage />
		<Features />
	</StrictMode>
)
