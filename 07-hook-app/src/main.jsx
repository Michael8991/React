import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { SimpleForm } from './02-useEfect/SimpleForm'
// import { CustomHookForm } from './02-useEfect/FormWithCustomHook'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { HooksApp } from './HooksApp'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memos/Memorize'
// import { MemoHook } from './06-memos/MemoHook'
// import { CallbackHook } from './06-memos/CallbackHook'

import { Padre } from './08-tarea-memo/Padre'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Padre />
  </StrictMode>
)
