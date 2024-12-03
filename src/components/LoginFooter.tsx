export default function LoginFooter() {
	const Links = [
		'Często zadawane pytania',
		'Warunki korzystania',
		'Ustawienia cookie',
		'Ustawienia reklam',
		'Centrum pomocy',
		'Prywatność',
		'Informacje o firmie',
	]
	return (
		<div className="bg-black text-gray-400 ">
			<div className="container py-8 px-6 md:px-20 lg:px-36 xl:px-44 2xl:px-56 pt-32">
				<span className="">Pytania? Zadzwoń pod numer 00 800 112 4392</span>
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
					{Links.map((link, id) => (
						<a href="#" key={id} className="underline">
							{link}
						</a>
					))}
				</div>
			</div>
		</div>
	)
}
