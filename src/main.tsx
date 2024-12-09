import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage.tsx'
import LoginPage from './pages/LoginPage.tsx'
import BrowsePage from './pages/BrowsePage.tsx'
import VideosPage from './pages/VideosPage.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/browse" element={<BrowsePage />} />
				<Route path="/videos" element={<VideosPage />} />
			</Routes>
		</Router>
	</StrictMode>
)
