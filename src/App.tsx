import './App.css'
import Navbar from './components/Navbar'
import { Hero } from './components/Hero'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { Testimonials } from './components/Testimonials'
import { Services } from './components/Services'
import { About } from './components/About'
import { Contact } from './components/Contact'

function App() {
	return (
		<>
			<Navbar />
			<main className="container mx-auto px-4 py-8 flex flex-col gap-20">
				<Hero />
				<About />
				<Services />
				<Testimonials />
				<FAQ />
				<Contact />
			</main>
			<Footer />
		</>
	)
}

export default App
