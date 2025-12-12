import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ContextTheme from './context/ContextTheme.jsx'


createRoot(document.getElementById('root')).render(
  <ContextTheme>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextTheme>
)
