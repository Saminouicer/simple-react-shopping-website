import React from 'react'
import {products} from'../../data'
import Product from '../../components/product'

const Shop = () => {
  return (
    <div className='bg-gray-100 py-10'>
      <h1 className='text-3xl font-bold text-center'>sami shop</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4 md:p-10 '>

      {products.map((product)=> {
         return <Product data={product}/>
      })}
      </div>
    </div>
  )
}

export default Shop