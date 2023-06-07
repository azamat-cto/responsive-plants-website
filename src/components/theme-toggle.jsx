import { useTheme } from 'next-themes'
import { Icons } from './icons.jsx'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? <Icons.moon /> : <Icons.sun />}
    </button>
  )
}
