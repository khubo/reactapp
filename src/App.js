import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// components
import Home from './components/home'
import Product from './components/product'
import Analysis from './components/analysis'

// load styles
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Product Inventory</h1>
        </header>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/products' component={Product} />
          <Route path='/analysis' component={Analysis} />
        </Switch>

      </div>
    )
  }
}

export default App
