import React from 'react'
import ReactDOM from 'react-dom/client'
import { LoginProvider } from './context/LoginContext'
import { TodoProvider } from './context/TodoContext'
import App from './App'
import './style.css'
import { ThemeProvider } from './context/ThemeContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <TodoProvider>
        <LoginProvider>
          <App />
        </LoginProvider>
      </TodoProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
