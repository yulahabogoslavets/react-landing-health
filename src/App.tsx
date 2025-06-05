import './App.css'
import Navbar from './components/Navbar'
import { Hero } from './components/Hero'

function App() {
	return (
		<>
			<Navbar />
			<main className="container mx-auto px-4 py-8">
				<Hero />
			</main>
		</>
	)
}

export default App
