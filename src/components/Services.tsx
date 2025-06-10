import { Headline } from './shared/Headline'
import { services } from '../utils/services-data'
import { useState, useRef } from 'react'

export const Services = () => {
	const [activeTab, setActiveTab] = useState(0)
	const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

	const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.target instanceof HTMLButtonElement) {
			let newIdx = activeTab
			if (e.key === 'ArrowRight') {
				newIdx = (activeTab + 1) % services.length
				setActiveTab(newIdx)
				tabRefs.current[newIdx]?.focus()
				e.preventDefault()
			}
			if (e.key === 'ArrowLeft') {
				newIdx = (activeTab - 1 + services.length) % services.length
				setActiveTab(newIdx)
				tabRefs.current[newIdx]?.focus()
				e.preventDefault()
			}
		}
	}

	return (
		<section id="services" className="flex flex-col gap-4 items-center">
			<Headline
				label="services"
				title="Your Path to Well-being"
				text="Discover expert guidance for a healthier mind and balanced life."
			/>

			<div
				className="flex justify-center flex-wrap gap-4 mb-6"
				role="tablist"
				aria-label="Service tabs"
				onKeyDown={handleKeyDown}
			>
				{services.map((item, idx) => (
					<button
						key={item.title}
						ref={(el) => {
							tabRefs.current[idx] = el
						}}
						className={`px-4 py-2 rounded-t-lg font-semibold transition-colors duration-200 hover:cursor-pointer ${
							activeTab === idx
								? 'bg-primary text-white'
								: 'bg-orange-200 text-black hover:bg-primary hover:text-white focus:bg-primary focus:text-white'
						}`}
						onClick={() => setActiveTab(idx)}
						aria-selected={activeTab === idx}
						aria-controls={`service-panel-${idx}`}
						id={`service-tab-${idx}`}
						role="tab"
						tabIndex={activeTab === idx ? 0 : -1}
					>
						{item.title}
					</button>
				))}
			</div>

			{/* Tab Panel */}
			<div
				className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl"
				id={`service-panel-${activeTab}`}
				role="tabpanel"
				aria-labelledby={`service-tab-${activeTab}`}
			>
				<h3 className="text-xl font-semibold mb-2">{services[activeTab].title}</h3>
				<p className="text-gray-700">{services[activeTab].description}</p>
			</div>
		</section>
	)
}
