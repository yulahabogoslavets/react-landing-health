import { Button } from './shared/Button'
import { Headline } from './shared/Headline'

export const About = () => {
	return (
		<section id="about" className="flex flex-col gap-4 items-center">
			<Headline
				label="How it works"
				title="We Help You Prioritize Your Mental Health"
				text="Browse therapists, book a session, and start your healing journey with trusted professionals.Find a Therapist"
			/>

			<div className="flex justify-between items-stretch flex-col md:flex-row gap-4 ">
				<div
					className="bg-linear-to-r from-white to-orange-200 shadow-lg rounded-lg p-6 flex flex-col justify-between gap-4 w-full md:w-1/2 flex-1"
					data-block="browse"
				>
					<h3 className="text-2xl font-semibold">Browse Therapists</h3>
					<p className="text-gray-700">
						Explore our directory of licensed therapists and mental health professionals. Filter by specialty, location,
						and availability to find the right fit for you.
					</p>
					<Button text="Learn more" className="bg-white border-primary" classNameSpan="!text-black" />
				</div>
				<div
					className="bg-linear-65 from-white to-orange-200 shadow-lg rounded-lg p-6 flex flex-col justify-between gap-4 w-full md:w-1/2 flex-1"
					data-block="find"
				>
					<h3 className="text-2xl font-semibold mb-2">Lorem Ipsum</h3>
					<p className="text-gray-700">
						Explore our directory of licensed therapists and mental health professionals. Filter by specialty, location,
						and availability to find the right fit for you. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Soluta impedit facilis ad quam est deserunt qui, nam minus ducimus illum iusto vero autem sint sed, dolor
						fugit possimus cumque asperiores? Blanditiis esse, rem in, vitae praesentium labore nobis nam nesciunt sit
						unde ex distinctio optio consequatur illum fugit maxime, reiciendis delectus. Non beatae dignissimos maxime
						odit blanditiis, corporis quia illo?
					</p>

					<Button text="Learn more" className="bg-white border-primary" classNameSpan="!text-black" />
				</div>
			</div>
		</section>
	)
}
