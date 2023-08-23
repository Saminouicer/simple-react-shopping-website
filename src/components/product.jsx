import React, { useContext } from 'react'
import  { ContextShopProvider } from'../context/contextshop'



const Product = (props) => {
  const {dataItems,addItems}=useContext(ContextShopProvider)
    const {id,productName,price,productImage}=props.data;
  return (
    <div key={id} className='shadow-xl text-center bg-white rounded-2xl p-4 hover:translate-y-[-10px] duration-300'>
        <h1 className='text-xl font-bold mb-4'>{productName}</h1>
        <img className='h-[300px] object-cover m-auto' src={productImage} alt={productName} />
        <p className='font-bold text-lg my-6'>${price}</p>
        <botton onClick={()=>addItems(id)} className='rounded-full border-black border-solid border-[1px] text-black px-4 py-2 cursor-pointer hover:text-white hover:bg-black duration-300'>Add to cart {dataItems[id]!==0 && <>({dataItems[id]})</>}</botton>
    </div>
  )
}

export default Product