import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const backgrounds = [
	{ background: '/netflix1.jpg' },
	{ background: '/netflix2.jpg' },
	{ background: '/netflix3.jpg' },
	{ background: '/netflix4.jpg' },
	{ background: '/netflix5.jpg' },
	{ background: '/netflix6.jpg' },
	{ background: '/netflix7.jpg' },
	{ background: '/netflix8.jpg' },
	{ background: '/netflix9.jpg' },
	{ background: '/netflix10.jpg' },
]

export default function CarouselSection() {
	return (
		<div className="bg-black px-6 md:px-20 lg:px-36 text-white flex flex-row ">
			<div className="container mx-auto">
				<div className="px-6 pt-14">
					<h2 className="text-2xl font-bold">Popularne teraz</h2>
				</div>
				<div className="pt-8">
					<Carousel
						arrows
						autoPlaySpeed={3000}
						centerMode={false}
						infinite={true}
						responsive={{
							desktop: { breakpoint: { max: 3000, min: 1340 }, items: 5 },
							mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
							tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
							md: { breakpoint: { max: 1340, min: 1024 }, items: 4 },
						}}
						slidesToSlide={2}
						swipeable>
						{backgrounds.map((bg, index) => (
							<div
								key={index}
								className="bg-cover bg-no-repeat bg-center rounded-xl hover:scale-110 mx-12 w-32 h-48 md:w-48 md:h-64 my-4 "
								style={{ backgroundImage: `url(${bg.background})` }}></div>
						))}
					</Carousel>
				</div>
			</div>
		</div>
	)
}
