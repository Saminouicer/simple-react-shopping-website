import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineShoppingCart} from'react-icons/ai'
import { ContextShopProvider } from '../context/contextshop'

const Navbar = () => {

  const {dataItems}=useContext(ContextShopProvider)
  const itemsCount = ()=> {
    let count=0;
    for(let item in dataItems) {
      if(dataItems[item]>0) {
        count++;
      }
    }
    return count;
  }
  return (
    <div className=' bg-black flex items-center py-4 px-8 justify-end sticky top-0 z-[100]'>
        <Link to={'/'} className='text-white font-bold text-lg'>shop</Link>
        <Link to={'/cart'} className='text-white ml-2 relative '><AiOutlineShoppingCart size={30}/>
            {itemsCount()>0?
(                <span className='bg-red-600 text-white absolute top-[70%] right-[-7px] px-2 rounded-full'>{itemsCount()}</span>
)                  :('')      }
        </Link>
    </div>
  )
}

export default Navbar