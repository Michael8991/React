import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import { JournalApp } from './JournalApp'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <JournalApp />
    </StrictMode>
  </BrowserRouter>
)
