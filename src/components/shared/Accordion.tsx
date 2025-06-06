import { useState, useRef, useEffect } from 'react'
import { Plus, Minus } from 'lucide-react'

interface AccordionProps {
	title: string
	text: string
}

export const Accordion = ({ title, text }: AccordionProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const [maxHeight, setMaxHeight] = useState<string>('0px')
	const contentRef = useRef<HTMLDivElement>(null)

	const toggleAccordion = () => {
		setIsOpen((prev) => !prev)
	}

	// Adjust max-height when open state changes
	useEffect(() => {
		if (isOpen && contentRef.current) {
			setMaxHeight(`${contentRef.current.scrollHeight}px`)
		} else {
			setMaxHeight('0px')
		}
	}, [isOpen])

	return (
		<div
			className={`
				py-2 transition-all rounded-xl border bg-white group
				${isOpen ? 'border-primary ring-2 ring-primary' : 'border-gray-200'}
				focus-within:ring-2 focus-within:ring-primary
				hover:border-primary hover:shadow-sm
			`}
		>
			<h3>
				<button
					onClick={toggleAccordion}
					className="flex justify-between items-center w-full text-left px-4 py-2 focus:outline-none hover:cursor-pointer"
					aria-expanded={isOpen}
					aria-controls={`accordion-content-${title}`}
					id={`accordion-button-${title}`}
				>
					<span className="text-lg lg:text-xl text-primary font-semibold">{title}</span>
					<span className="text-white bg-gray-400 rounded-lg">
						{isOpen ? <Minus size={24} aria-hidden="true" /> : <Plus size={24} aria-hidden="true" />}
					</span>
				</button>
			</h3>

			<div
				id={`accordion-content-${title}`}
				role="region"
				aria-labelledby={`accordion-button-${title}`}
				tabIndex={-1}
				ref={contentRef}
				style={{
					maxHeight,
					overflow: 'hidden',
					transition: 'max-height 0.4s ease',
				}}
				className="px-4"
			>
				<div className="pb-4">
					<p className="text-sm leading-6 tracking-wider">{text}</p>
				</div>
			</div>
		</div>
	)
}
