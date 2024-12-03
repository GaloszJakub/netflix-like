import { ComboBox } from './Library'
import Cookies from 'js-cookie'

export default function Footer() {
	const translations = {
		Polski: {
			welcome: 'Zaczynamy oglądać? Wprowadź adres e-mail, aby utworzyć lub odnowić konto.',
			placeholder: 'email_pl',
			start: 'Rozpocznij',
			footerText: 'Podróba Netflixa',
		},
		English: {
			welcome: 'Ready to start watching? Enter your email to create or restart your membership.',
			placeholder: 'email_eng',
			start: 'Get Started',
			footerText: 'Netflix Clone',
		},
	}

	type Language = keyof typeof translations
	const language: Language = (Cookies.get('language') as Language) || 'Polski'

	const texts = translations[language]

	const links = Array.from({ length: 20 }, (_, index) => ({
		text: `${language === 'Polski' ? 'Link' : 'Link'} ${index + 1}`,
		href: `#link${index + 1}`,
	}))

	return (
		<div className="bg-black text-[#A6A6A6] px-6 md:px-20 lg:px-36 xl:px-44 2xl:px-56 pb-8">
			<div className="px-6 max-w-[1300px] ml-12">
				<div>
					<div className="text-center pt-8 text-white">
						<p>{texts.welcome}</p>
					</div>
					<div className="flex flex-col md:flex-row mx-auto max-h-32 max-w-[80%] gap-2 my-8">
						<input
							type="text"
							id="floating-input"
							placeholder={texts.placeholder}
							className="peer w-full px-4 py-2 text-gray-100 bg-black/70 border basis-3/4 border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition"
						/>
						<a
							href="login"
							className="bg-[#E50914] w-full rounded-md font-bold text-sm basis-1/4 text-center my-auto py-2 text-white block">
							{texts.start}
						</a>
					</div>
				</div>
				<div id="list" className="px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
					{links.map((link, index) => (
						<a key={index} href={link.href} className="text-sm underline hover:text-white">
							{link.text}
						</a>
					))}
				</div>
				<div className="scale-75 max-w-[200px] pt-12">
					<ComboBox options={['Polski', 'English']} />
				</div>
				<div className="py-8 pl-6">
					<p>{texts.footerText}</p>
				</div>
			</div>
		</div>
	)
}
