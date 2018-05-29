import React, { Component } from 'react'
import { fetchProducts } from '../services/product'

export default class Product extends Component {
  constructor () {
    super()
    this.state = {
      products: []
    }
  }

  componentDidMount () {
    // dispatch req to fetch products
    fetchProducts().then(products => {
      this.setState({products})
    })
  }

  render () {
    const drawTable = () => {
      return this.state.products.map((product, index) => {
        return (
          <tr key={product._id}>
            <td> {index} </td>
            <td> {product.name} </td>
            <td> {product.price }</td>
            <td> {product.gst} %</td>
            <td> {product.total} </td>
            <td> {(new Date(product.createdAt)).toDateString()} </td>
          </tr>
        )
      })
    }

    return (
      <div>
        <h3 className='mx-auto display-5 mt-3'> Products</h3>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'> #</th>
              <th scope='col'> name </th>
              <th scope='col'> price </th>
              <th scope='col'> gst </th>
              <th scope='col'> total </th>
              <th scope='col'> date </th>
            </tr>

            { drawTable() }
          </thead>
        </table>
      </div>
    )
  }
}
