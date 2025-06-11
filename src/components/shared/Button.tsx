interface ButtonProps {
	text: string
	className?: string
	classNameSpan?: string
	type?: 'submit' | 'button'
}

export const Button = ({ text, className = '', classNameSpan = '', type }: ButtonProps) => {
	return (
		<button
			type={type || 'button'}
			className={`bg-primary rounded-4xl py-2 px-6 transition-colors duration-300 hover:cursor-pointer hover:bg-teal-800 focus:bg-teal-800 border group ${className}`}
		>
			<span className={`text-white group-hover:!text-white ${classNameSpan}`}> {text}</span>
		</button>
	)
}
