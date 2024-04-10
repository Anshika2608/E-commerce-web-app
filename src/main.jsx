import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { MenContextProvider } from './Contexts/MenContext/MenContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <MenContextProvider>
    <App />
    </MenContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
