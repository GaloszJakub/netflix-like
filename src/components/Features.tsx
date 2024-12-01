import { GradientCard } from './Library'
import Cookies from 'js-cookie'

const CustomIcon1: React.FC = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="white"
		className="size-6">
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
		/>
	</svg>
)
const CustomIcon2: React.FC = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="white"
		className="size-6">
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
		/>
	</svg>
)
const CustomIcon3: React.FC = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="white"
		className="size-6">
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
		/>
	</svg>
)
const CustomIcon4: React.FC = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="white"
		className="size-6">
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
		/>
	</svg>
)
const cardsData = {
	Polski: [
		{
			title: 'Tytuł1',
			content: 'Lorem ipsum doloresLorem ipsum doloresLorem ipsum doloresLorem ipsum dolores',
			icon: <CustomIcon1 />,
		},
		{
			title: 'Tytuł2',
			content: 'Lorem ipsum Lorem ipsum doloresLorem ipsum doloresLorem ipsum doloresLorem ipsum dolores dolores',
			icon: <CustomIcon2 />,
		},
		{
			title: 'Tytuł3',
			content: 'Lorem ipsum dolores Lorem ipsum doloresLorem ipsum doloresLorem ipsum doloresLorem ipsum dolores',
			icon: <CustomIcon3 />,
		},
		{
			title: 'Tytuł4',
			content: 'Lorem ipsum dolores Lorem ipsum doloresLorem ipsum doloresLorem ipsum doloresLorem ipsum dolores',
			icon: <CustomIcon4 />,
		},
	],
	English: [
		{
			title: 'Title1',
			content: 'Lorem ipsum doloresLorem ipsum doloresLorem ipsum doloresLorem ipsum dolores',
			icon: <CustomIcon1 />,
		},
		{
			title: 'Title2',
			content: 'Lorem ipsum doloresLorem ipsum doloresLorem ipsum doloresLorem ipsum dolores',
			icon: <CustomIcon1 />,
		},
		{
			title: 'Title3',
			content: 'Lorem ipsum doloresLorem ipsum doloresLorem ipsum doloresLorem ipsum dolores',
			icon: <CustomIcon1 />,
		},
		{
			title: 'Title4',
			content: 'Lorem ipsum doloresLorem ipsum doloresLorem ipsum doloresLorem ipsum dolores',
			icon: <CustomIcon1 />,
		},
	],
}

export default function Features() {
	type Language = keyof typeof cardsData
	const language: Language = (Cookies.get('language') as Language) || 'Polski'

	const texts = cardsData[language]
	return (
		<div className="bg-black md:px-20 lg:px-36 xl:px-44 2xl:px-56">
			<div className="container mx-auto max-w-[1300px]">
				<div className="text-white px-6 pt-14 ">
					<h2 className="text-2xl">{language === 'Polski' ? 'Więcej powodów by dołączyć' : 'More Reasons to Join'}</h2>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 p-6  gap-4  ">
					{texts.map((card, index) => (
						<GradientCard key={index} title={card.title} content={card.content} icon={card.icon} />
					))}
				</div>
			</div>
		</div>
	)
}
