import '../../style/Link.css'

interface LinkProps {
	href: string
	text: string
	className?: string
}

export const Link = ({ href, text, className = '' }: LinkProps) => {
	return (
		<a href={href} className={`link-underline-trail cursor-pointer ${className}`}>
			<span> {text}</span>
		</a>
	)
}
