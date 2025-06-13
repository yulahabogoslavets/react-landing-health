import { Headline } from './shared/Headline'
import { ContactForm } from './shared/ContactForm'

export const Contact = () => {
	return (
		<section id="contact" className="flex flex-col gap-4 items-center">
			<Headline
				label="Get in Touch"
				title="We are here to to support your"
				text="Whether you have questions, need help getting started, or want to learn more — reach out anytime."
			/>

			<div
				className="w-full flex justify-between md:items-stretch flex-col md:flex-row gap-4 bg-white p-6 rounded-lg shadow-lg 
				border border-white dark:bg-neutral-800 dark:border-neutral-700"
				data-block="contact"
			>
				<div className="flex flex-col  items-center gap-4 w-full md:w-1/2 ">
					<h3 className="text-2xl font-semibold text-primary">Contact Details:</h3>
					<address className="not-italic">
						<ul>
							<li>
								<strong className="text-primary mr-2">Email:</strong>
								<a
									href="mailto:support@test.com"
									className="link-underline-trail cursor-pointer"
									aria-label="Email support at support@test.com"
								>
									support@test.com
								</a>
							</li>
							<li>
								<strong className="text-primary mr-2">Phone:</strong>
								<a
									href="tel:+11234567890"
									className="link-underline-trail cursor-pointer"
									aria-label="Call us at +1 123 456 7890"
								>
									+1 (123) 456-7890
								</a>
							</li>
							<li>
								<strong className="text-primary mr-2">Address:</strong>
								<span>123 Test Street, Test City, TC 12345</span>
							</li>
						</ul>
					</address>

					<p className="text-primary mt-auto">We typically respond within 12 hours.</p>
				</div>
				<div className=" flex flex-col justify-between items-center gap-4 w-full md:w-1/2 flex-1">
					<h3 className="text-2xl font-semibold text-primary text-center">Send Us a Message</h3>
					<ContactForm />
				</div>
			</div>
		</section>
	)
}
