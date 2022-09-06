import {Product} from '../store/mainReducer'

const PRODUCTS: Array<Product> = require('../products.json')

export const getProducts: ()=> Promise<Array<Product>> = () => {
  return new Promise((resolve) => {
    resolve(PRODUCTS)
  })
}

