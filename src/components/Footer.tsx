import { useState, useEffect } from 'react'
import { navItems } from './Navbar'
import { Link } from './shared/Link'
import { socialLinks } from '../utils/icons.tsx'
import { Copyright } from 'lucide-react'

export const Footer = () => {
	const [year, setYear] = useState(new Date().getFullYear())

	useEffect(() => {
		setYear(new Date().getFullYear())
	}, [])

	return (
		<footer className="container mx-auto px-4 py-8 flex flex-col items-center gap-4 mt-auto bg-white rounded-3xl border border-white dark:bg-neutral-800 dark:text-white dark:border dark:border-white">
			<div className="flex flex-col justify-between items-center md:flex-row gap-4 w-full">
				<ul className="flex flex-col md:flex-row gap-4 ">
					{navItems.map((item, index) => (
						<Link text={item.label} href={item.href} key={index} />
					))}
				</ul>
				<ul className="flex gap-4 ">
					{socialLinks.map(({ href, title, Icon }) => (
						<li key={href}>
							<a
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`Visit ${title}`}
								title={`Visit ${title}`}
								className="group"
							>
								<Icon
									width={24}
									height={24}
									className="ease-linear duration-300 fill-orange-500 group-hover:fill-orange-300"
								/>
							</a>
						</li>
					))}
				</ul>
			</div>
			<div className="border-primary border-t w-full pt-4">
				<p className="flex items-center">
					<Copyright className="mr-1" /> {year}. All Rights Reserved.
				</p>
			</div>
		</footer>
	)
}
