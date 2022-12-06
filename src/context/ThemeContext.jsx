import { createContext, useContext } from 'react'

const ThemeContext = createContext({})

export function useTheme() {
  return useContext(ThemeContext)
}

export function ThemeProvider({ children }) {
  const themeColors = ['light', 'dark']
  const themeColor = themeColors[1]

  const setBackgroundColor = () => ((themeColor === 'dark') ? 'bg-dark' : '')
  const setTextColor = () => ((themeColor === 'dark') ? 'text-white' : '')

  return (
    <ThemeContext.Provider
      value={{
        setBackgroundColor,
        setTextColor,
      }}
    >
      { children }
    </ThemeContext.Provider>
  )
}
