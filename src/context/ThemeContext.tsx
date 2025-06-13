import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextProps {
	darkMode: Theme
	setDarkMode: (mode: Theme | boolean) => void
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const getInitialTheme = (): Theme => {
		if (typeof window !== 'undefined') {
			const saved = localStorage.getItem('theme')
			if (saved === 'light' || saved === 'dark') return saved
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
			return prefersDark ? 'dark' : 'light'
		}
		return 'light'
	}

	const [darkMode, setDarkModeState] = useState<Theme>(getInitialTheme)

	useEffect(() => {
		document.documentElement.classList.toggle('dark', darkMode === 'dark')
		localStorage.setItem('theme', darkMode)
	}, [darkMode])

	const setDarkMode = (mode: Theme | boolean) => {
		if (typeof mode === 'boolean') {
			setDarkModeState(mode ? 'dark' : 'light')
		} else {
			setDarkModeState(mode)
		}
	}

	return <ThemeContext.Provider value={{ darkMode, setDarkMode }}>{children}</ThemeContext.Provider>
}

export const useDarkMode = () => {
	const context = useContext(ThemeContext)
	if (!context) throw new Error('useDarkMode must be used within ThemeProvider')
	return context
}
