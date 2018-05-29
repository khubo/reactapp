import React, {Component} from 'react'
import { addProduct } from '../services/product'

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

  handleChange = (event) => {
    this.setState({[event.target.id] : event.target.value})
  }

  render () {

    let {price, gst, product } = this.state
    price = Number(price)
    gst = Number(gst)
    let total = price + (price * gst / 100) 
    let disabled =  !product || (price < 0) || this.state.disabled
    return (
      <div className='card mx-auto mt-5'>
        <div className='card-body'>  
        <h5 className="card-title">Add Product</h5>

        
          <form>
            <div className='form-group'>
              <input type='text' className='form-control' id='product' value={this.state.product} onChange={this.handleChange} placeholder='Product Name' />
            </div>
            <div className='form-group'>
              <input type='number' className='form-control' id='price' value={this.state.price} onChange={this.handleChange} placeholder='Price' />
            </div>
            <div className='form-group'>
              <label htmlFor='gst'> GST Rate</label>
              <select className='form-control' id='gst' onChange={this.handleChange}>
                <option value="5">5%</option>
                <option value="12">12%</option>
                <option value="18">18%</option>
                <option value="28">28%</option>
              </select>
            </div>
            <div className='form-group'>
              <label htmlFor='total'> Total </label>
              <input type='number' className='form-control' id='total' value={total}  disabled />
            </div>
          </form>
          <button className='btn btn-primary' onClick={this.add} disabled={disabled}>Add</button>
        </div>
      </div>
    )
  }
}
