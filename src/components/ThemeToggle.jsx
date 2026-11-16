import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className={`toggle-wrapper ${className}`} title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
      <input
        type="checkbox"
        className="toggle-checkbox"
        checked={isDark}
        onChange={toggleTheme}
        aria-label="Toggle dark/light mode"
      />
      <div className="toggle-container">
        <div className="toggle-button">
          <div className="toggle-button-circles-container">
            <div className="toggle-button-circle" />
            <div className="toggle-button-circle" />
            <div className="toggle-button-circle" />
            <div className="toggle-button-circle" />
            <div className="toggle-button-circle" />
            <div className="toggle-button-circle" />
            <div className="toggle-button-circle" />
            <div className="toggle-button-circle" />
            <div className="toggle-button-circle" />
            <div className="toggle-button-circle" />
            <div className="toggle-button-circle" />
            <div className="toggle-button-circle" />
          </div>
        </div>
      </div>
    </div>
  )
}
