import { Headline } from './shared/Headline'
import { Accordion } from './shared/Accordion'
import { questions } from '../utils/accordion-data'

export const FAQ = () => {
	return (
		<section id="question" className="flex flex-col lg:flex-row gap-4 items-center">
			<Headline
				label="Need Help!"
				title="Frequently Asked Questions"
				text="Find answers to common questions about services, therapy, and mental well-being"
			/>

			<div className="space-y-4">
				{questions.map((question, key) => (
					<Accordion key={key} title={question.title} text={question.answer} />
				))}
			</div>
		</section>
	)
}
