import './index.css'
// import { App } from './App'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'

import { store } from './store'
import { PokemonApp } from './PokemonApp'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <PokemonApp />
    </Provider>
  </StrictMode>,
)
