interface ButtonProps {
	text: string
	className?: string
}

export const Button = ({ text, className = '' }: ButtonProps) => {
	return (
		<button
			className={`bg-primary rounded-4xl py-2 px-6 transition-colors duration-300 hover:cursor-pointer hover:bg-teal-800 focus:bg-teal-800 ${className}`}
		>
			<span className="text-white"> {text}</span>
		</button>
	)
}
