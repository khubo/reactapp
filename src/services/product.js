import axios from 'axios'

const url = 'http://localhost:1337/api'

export const addProduct = (product) => {
  return axios.post(`${url}/product`, product)
}

export const fetchProducts = () => {
  return axios.get(`${url}/products`)
    .then(data => data.data.products)
}
