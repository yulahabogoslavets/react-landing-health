import { Button } from './shared/Button'
import heroImg from '../assets/fruits.jpg'

export const Hero = () => {
	return (
		<section className="bg-orange-200 p-8 rounded-3xl flex flex-col gap-6 items-center justify-between lg:flex-row">
			<div className="space-y-4 text-center">
				<h1 className="text-3xl lg:text-4xl text-primary font-semibold">Support for your mental Health</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perferendis quibusdam necessitatibus
					blanditiis numquam maiores in ut commodi, saepe asperiores tenetur debitis possimus consequatur aliquid
					officiis temporibus est exercitationem minima!
				</p>
				<Button text="Get Started" className="mt-4" />
			</div>

			<div className="flex mx-auto max-w-3xl lg:w-1/2 lg:h-auto lg:max-w-none lg:mx-0">
				<img
					src={heroImg}
					alt="Fruits"
					loading="lazy"
					className="w-full h-full max-h-96 rounded-3xl object-cover shadow-sm "
				/>
			</div>
		</section>
	)
}
