import { useDarkMode } from '../../context/ThemeContext'
import { Sun, Moon } from 'lucide-react'

export const DarkModeToggle = () => {
	const { darkMode, setDarkMode } = useDarkMode()
	const isDark = darkMode === 'dark'

	const handleChange = () => {
		setDarkMode(isDark ? 'light' : 'dark')
	}

	return (
		<label className="relative inline-flex items-center cursor-pointer select-none">
			<input
				type="checkbox"
				className="sr-only peer"
				checked={isDark}
				onChange={handleChange}
				aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
			/>
			<div className="w-14 h-7 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 peer-checked:from-blue-400 peer-checked:to-primary transition-all duration-500 relative">
				<span
					className={`absolute top-1 left-1 flex items-center justify-center h-5 w-5 rounded-full bg-white shadow-md transition-all duration-500
                        ${isDark ? 'translate-x-7' : ''}
                    `}
				>
					{isDark ? <Moon className="text-primary" size={20} /> : <Sun className="text-yellow-400" size={20} />}
				</span>
			</div>
		</label>
	)
}
