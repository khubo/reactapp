import React, {Component} from 'react'
import { addProduct } from '../services/product'
import { calculateTotal } from '../services/gst'

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      product: '',
      price: 0,
      gst: 5,
      total: 0,
      disabled: false,
      error: ''
    }
  }

  clearInputs = () => {
    this.setState({
      disabled: false,
      product: '',
      price: 0,
    })
  }

  add = () => {
    let product = {
      name: this.state.product,
      price: this.state.price,
      gst: this.state.gst,
    }
    this.setState({ disabled: true})

    addProduct(product).then(res => {
      this.clearInputs()
    })
    .catch(e => {
      console.log('error adding product', e.message)
      this.clearInputs()
    })
  }

  updateTotal =  (changed) => {
   
    calculateTotal(this.state.price, this.state.gst).then(total => {
      this.setState({
        total
      })
    })

  }

  handleChange = (event) => {
    this.setState({[event.target.id] : event.target.value})
  }

  render () {
    let { product, price } = this.state
    let disabled =  !product || (price < 0) || this.state.disabled
    return (
      <div className='row'>
       <div className='add-box col-8 mx-auto mt-5'>
        <h3 className='p3 add-header'> Add Product </h3>
          <form>
            <div className='form-group'>
              <input type='text' className='form-control' id='product' value={this.state.product} onChange={this.handleChange} placeholder='Product Name' />
            </div>
            <div className='form-group'>
              <input type='number' className='form-control' id='price' value={this.state.price} onChange={this.handleChange} onBlur={this.updateTotal} placeholder='Price' />
            </div>
            <div className='input-group mb-3'>
              <span className="input-group-text"> GST</span>              
              <select className='form-control' id='gst' onChange={this.handleChange} onBlur={this.updateTotal}>
                <option value="5">5%</option>
                <option value="12">12%</option>
                <option value="18">18%</option>
                <option value="28">28%</option>
              </select>
            </div>
            <div className='input-group mb-3'>
              <input type='number' className='form-control' id='total' value={this.state.total} disabled />

              <span className='input-group-text'> Total</span>
            </div>
          </form>
          <button className='btn btn-primary' onClick={this.add} disabled={disabled}>Add</button>
        
      </div>
      </div>
    )
  }
}
