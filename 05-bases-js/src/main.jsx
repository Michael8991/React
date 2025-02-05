import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './FirstApp'
import { CounterApp } from './counterApp'
import './counterApp.css'
import { HelloWorldApp } from './HelloWorldApp'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={0}></CounterApp>
        {/* <App title={'Curso de Udemy'}></App> */}
    </React.StrictMode>
)