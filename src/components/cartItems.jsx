import React, { useContext } from 'react'
import { ContextShopProvider } from '../context/contextshop';



const CartItems = (props) => {

    const {changeValue,addItems,deleteItems,dataItems,deleteAllItems}=useContext(ContextShopProvider)
    const {id,productName,price,productImage}=props.data;
  return (
    <div className='w-[800px] mx-auto p-6 flex md:flex-row justify-start shadow-lg mb-10 bg-white rounded-lg items-center max-w-full flex-col'>
        <img className='h-[200px]' src={productImage} alt="" />
        <div className=' px-10 md:text-left text-center'>
            <h1 className=' font-bold text-xl  '>{productName}</h1>
            <p className='my-6 text-xl '>${price}</p>
            <button onClick={()=>{addItems(id)}} className='border-solid border-black bg-black text-white border-[1px] px-2 py-1 hover:bg-white hover:text-black duration-300 cursor-pointer font-bold '>+</button>
            <input onChange={(e)=>{changeValue(id,Number(e.target.value))}} value={dataItems[id]} className='w-[50px] text-center focus:outline-none'/>
            <button onClick={()=>{deleteItems(id)}} className='border-solid border-black  bg-black text-white border-[1px] px-2 py-1 hover:bg-white hover:text-black duration-300 cursor-pointer font-bold '>-</button>
        </div>
        <div className='flex flex-1 justify-end md:mr-10 p-4 items-center'>
        <button onClick={()=>{deleteAllItems(id)}} className='cursor-pointer bg-red-600 hover:bg-red-400 duration-300 text-white rounded-full px-2 py-1 '>Delete</button>
        </div>
    </div>
  )
}

export default CartItems