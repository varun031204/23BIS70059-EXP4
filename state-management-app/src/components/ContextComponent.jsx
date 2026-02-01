import { useTheme } from '../context/ThemeContext'

const ContextComponent = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div>
      <h3>Global State (Context API)</h3>
      <p>Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default ContextComponent