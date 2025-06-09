import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import { Headline } from './shared/Headline'
import { testimonials } from '../utils/testimonials-data'
import '@splidejs/react-splide/css'
import { useRef, useState } from 'react'
import type { Splide as SplideInstance } from '@splidejs/splide'
import { ChevronRight, ChevronLeft } from 'lucide-react'

export const Testimonials = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const splideRef = useRef<SplideInstance | null>(null)
	const bgClasses = ['bg-red-100', 'bg-blue-100', 'bg-green-100', 'bg-yellow-100']

	return (
		<section
			id="feedback"
			className="relative flex flex-col md:flex-row justify-between items-start overflow-visible gap-8 "
		>
			<div className="flex flex-col items-start md:w-2/5">
				<Headline
					label="Testimonials"
					title="What our clients are saying"
					text="Positive experiences from users who have benefited from therapy or wellness programs."
				/>

				<div className="flex gap-4 mt-6 ml-auto">
					<button
						onClick={() => splideRef.current?.go('<')}
						className="p-2 bg-gray-200 rounded-full transition duration-300 cursor-pointer active:bg-primary hover:bg-primary focus:bg-primary group"
						aria-label="Previous testimonial"
						title="Previous testimonial"
						disabled={testimonials.length <= 2}
					>
						<ChevronLeft aria-hidden="true" className="group-hover:text-white" />
					</button>
					<button
						onClick={() => splideRef.current?.go('>')}
						className="p-2 bg-gray-200 rounded-full transition duration-300 cursor-pointer active:bg-primary hover:bg-primary focus:bg-primary group"
						aria-label="Next testimonial"
						title="Next testimonial"
						disabled={testimonials.length <= 2}
					>
						<ChevronRight
							aria-hidden="true"
							className="group-hover:text-white group-focus:text-white active:text-white"
						/>
					</button>
				</div>
			</div>

			<div className="w-full md:w-3/5 overflow-visible">
				<Splide
					hasTrack={false}
					options={{
						type: 'loop',
						perPage: 2,
						gap: '1rem',
						arrows: false,
						pagination: false,
						breakpoints: {
							768: {
								perPage: 1,
								gap: '1rem',
							},
							1280: {
								perPage: 2,
								gap: '1rem',
							},
						},
					}}
					onMounted={(splide: SplideInstance) => {
						splideRef.current = splide
					}}
					onMoved={(splide, newIndex) => setCurrentSlide(newIndex)}
					aria-label="Testimonials"
					aria-roledescription="carousel"
				>
					<SplideTrack>
						{testimonials.map((item, key) => (
							<SplideSlide key={key} className="flex justify-center">
								<div
									className={`${bgClasses[key % bgClasses.length]} p-6 rounded-lg shadow-md max-w-md flex flex-col justify-between h-full`}
								>
									<p className="text-gray-700 mb-4">{item.feedback}</p>
									<p className="text-gray-900 font-semibold">
										{item.name}, {item.age}
									</p>
								</div>
							</SplideSlide>
						))}
					</SplideTrack>
				</Splide>
			</div>
		</section>
	)
}
