import React from 'react'
import ReactDOM from 'react-dom/client'
import { LoginProvider } from './context/LoginContext'
import { TodoProvider } from './context/TodoContext'
import App from './App'
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <TodoProvider>
      <LoginProvider>
        <App />
      </LoginProvider>
    </TodoProvider>
  </React.StrictMode>
)
