interface HeadlineProps {
	label?: string
	title: string
	text: string
}

export const Headline = ({ label, title, text }: HeadlineProps) => {
	return (
		<div className="flex flex-col gap-4">
			{label && <span className="uppercase text-xs text-primary">{label}</span>}
			<h2 className="text-2xl lg:text-3xl text-primary font-semibold">{title}</h2>
			<p className="text-sm/6 tracking-wider">{text}</p>
		</div>
	)
}
