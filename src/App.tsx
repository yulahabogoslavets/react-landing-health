import './App.css'
import Navbar from './components/Navbar'
import { Hero } from './components/Hero'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'

function App() {
	return (
		<>
			<Navbar />
			<main className="container mx-auto px-4 py-8 flex flex-col gap-20">
				<Hero />
				<FAQ />
			</main>
			<Footer />
		</>
	)
}

export default App
