import React, { useContext } from 'react'
import CartItems from '../../components/cartItems'
import { ContextShopProvider } from '../../context/contextshop'
import { products } from '../../data'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const {totalPrice,dataItems}=useContext(ContextShopProvider)
  const navigate=useNavigate()
  

  

  return (

    <div className='bg-gray-200 min-h-screen p-10  '>
         <h1 className='font-bold text-4xl pb-10 text-center'>Your Cart Items</h1>  
          <div>
          {products.map(product=> {
              if(dataItems[product.id]!=0) {
                return <CartItems data={product}/>

              }
    })}
          </div>

          {totalPrice()>0?
          (<div className=''>
            <p className='text-center my-10 text-xl'>total price: ${totalPrice()}</p>
            <div className='flex justify-center gap-3'>
            <button onClick={()=>{navigate('/')}} className='cursor-pointer   max-w-max bg-black text-white   px-2 py-4 rounded-full border-solid border-black border-[1px] hover:bg-white hover:text-black duration-300'>Continue Shopping</button>
            <button className=' cursor-pointer   max-w-max bg-black text-white   px-2 py-4 rounded-full border-solid border-black border-[1px] hover:bg-white hover:text-black duration-300'>Checkout</button>
            </div>
          </div>)
          :(<h1 className='text-center font-bold text-xl text-gray-600'>Your Cart is empty</h1>)}

    </div>
  )
}

export default Cart