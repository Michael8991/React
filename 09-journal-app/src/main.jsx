import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import { JournalApp } from './JournalApp'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <StrictMode>
        <JournalApp />
      </StrictMode>
    </Provider>
  </BrowserRouter>
)
