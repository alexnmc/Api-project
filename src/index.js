import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './style.css'
import ExProvider from './ExProvider';

ReactDOM.render(
    <BrowserRouter>
         <ExProvider>
            <App/>
        </ExProvider>
    </BrowserRouter>, 
document.getElementById('root'))