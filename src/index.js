import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'
// include bootstrap
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
),
document.getElementById('root')
)
