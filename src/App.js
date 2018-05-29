import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap'

// components
import Home from './components/home'
import Product from './components/product'
import Analysis from './components/analysis'

// load styles
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
  }

  toggle =  () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render () {
    return (
      <div className='App'>
        <header className='fixed-top mb-5'>
          <Navbar color='light' light expand='sm'>
            <NavbarBrand> Inventory</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <Link className='pr-4' to={'/'}> Add </Link>
                </NavItem>
                <NavItem>
                  <Link className='pr-4' to={'/products'}> Products </Link> 
                </NavItem>
                <NavItem>
                   <Link className='pr-4' to={'/analytics'}> Analytics </Link>
                </NavItem>

              </Nav>
            </Collapse>
          </Navbar>
        </header>
        <div className='mt-5 pt-5'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/products' component={Product} />
          <Route path='/analytics' component={Analysis} />
        </Switch>
        </div>
      </div>
    )
  }
}

export default App
