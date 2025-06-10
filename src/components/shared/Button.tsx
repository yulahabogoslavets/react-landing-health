interface ButtonProps {
	text: string
	className?: string
	classNameSpan?: string
}

export const Button = ({ text, className = '', classNameSpan = '' }: ButtonProps) => {
	return (
		<button
			className={`bg-primary rounded-4xl py-2 px-6 transition-colors duration-300 hover:cursor-pointer hover:bg-teal-800 focus:bg-teal-800 border group ${className}`}
		>
			<span className={`text-white group-hover:!text-white ${classNameSpan}`}> {text}</span>
		</button>
	)
}
