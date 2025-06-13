import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.svg'
import { Link } from '../components/shared/Link'
import { DarkModeToggle } from './shared/DarkModeToggle'

export const navItems = [
	{ label: 'Home', href: '#' },
	{ label: 'About', href: '#about' },
	{ label: 'Services', href: '#services' },
	{ label: 'Testimonials', href: '#feedback' },
	{ label: 'FAQ', href: '#question' },
	{ label: 'Contact', href: '#contact' },
]

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen)
	}

	return (
		<header className="sticky top-0 z-50 p-4 backdrop-blur-lg shadow-lg bg-neutral-100 grid grid-cols-[1fr_auto] gap-4">
			<nav>
				<div className="container px-4 mx-auto relative lg:text-sm">
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<img src={logo} alt="Health Logo" className="w-10 h-10 mr-2" />
							<span className="text-xl tracking-tight">Health</span>
						</div>
						<ul className="hidden lg:flex ml-auto gap-4">
							{navItems.map((item, index) => (
								<li key={index}>
									<Link text={item.label} href={item.href} key={index} />
								</li>
							))}
						</ul>

						<div className="lg:hidden md:flex flex-col justify-end">
							<button
								onClick={toggleMobileMenu}
								className="hover:cursor-pointer focus:cursor-pointer"
								aria-label={`${mobileMenuOpen ? 'Menu close' : 'Menu open'}`}
							>
								{mobileMenuOpen ? <X /> : <Menu />}
							</button>
						</div>
					</div>

					{mobileMenuOpen && (
						<div
							className="fixed right-0 z-20 bg-neutral-200 w-full px-12 py-6 flex flex-col justify-center items-center lg:hidden
						dark:bg-black"
							data-block="mobile-menu"
						>
							<ul>
								{navItems.map((item, index) => (
									<li key={index}>
										<Link text={item.label} href={item.href} key={index} />
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</nav>
			<DarkModeToggle />
		</header>
	)
}
