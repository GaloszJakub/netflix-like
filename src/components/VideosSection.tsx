import { Carousel } from './Library'

export default function VideosSection() {
	interface ImageData {
		src: string
		title: string
	}

	const images: Record<number, ImageData> = {
		1: { src: '/nh1.jpg', title: 'Netflix 1' },
		2: { src: '/nh2.jpg', title: 'Netflix 2' },
		3: { src: '/nh3.jpg', title: 'Netflix 3' },
		4: { src: '/nh4.jpg', title: 'Netflix 4' },
		5: { src: '/nh5.jpg', title: 'Netflix 5' },
		6: { src: '/nh1.jpg', title: 'Netflix 1' },
		7: { src: '/nh2.jpg', title: 'Netflix 2' },
		8: { src: '/nh3.jpg', title: 'Netflix 3' },
		9: { src: '/nh4.jpg', title: 'Netflix 4' },
		10: { src: '/nh5.jpg', title: 'Netflix 5' },
	}

	const items = Array.from({ length: 24 }, (_, index) => {
		const imageKey = (index % Object.keys(images).length) + 1
		const { src, title } = images[imageKey]

		return (
			<div key={index} className="relative h-40 flex items-center justify-center text-white text-xl">
				<div className="transition-all duration-300 hover:delay-300 hover:scale-y-175 hover:scale-x-125">
					<img src={src} alt={title} className="w-full h-full object-top group-hover:h-1/2" />
					<div className="group relative hidden hover:block text-white">{title}</div>
				</div>
			</div>
		)
	})

	return (
		<div className=" 3xl:pt-[56rem] -z-20 ">
			<div className="bg-[url(/jinx.jpg)] w-screen flex-col h-[95vh] bg-cover bg-no-repeat"></div>
			<div className="bg-[#141414] pl-14 text-white text-2xl pb-28">
				<h2 className="py-4">Polecene na dziś</h2>
				<Carousel items={items} autoScroll={false} itemsPerGroup={6} />
			</div>
		</div>
	)
}
