import React, { createContext ,useState} from 'react'
import {products} from'../data.js'

export const ContextShopProvider=createContext(null);

const Contextshop = (props) => {
    const getdataItems=()=> {
        const cart={}
        for(let i=0;i<=products.length;i++) {
            cart[i]=0
        }
        return cart
    }
    const addItems =(itemsId)=> {
            setdataItems((prev)=>({...prev,[itemsId]:prev[itemsId] +1}))
    }
    const deleteItems =(itemsId)=> {
            setdataItems((prev)=>({...prev,[itemsId]:prev[itemsId] -1}))
    }
    const changeValue =(itemsId,newValue)=> {
        setdataItems((pre)=> ({...pre,[itemsId]:newValue}))
    }
    const totalPrice = ()=> {
        let price=0;
        for(let i=1;i<=products.length;i++) {
            if(dataItems[i]!=0) {
                price=dataItems[i]*products[i-1].price +price;
            }
        }
        return price;
    }
    const deleteAllItems = (itemsId)=> {
        setdataItems((pre)=>({...pre,[itemsId]:0}))
    }
    const [dataItems,setdataItems]=useState(getdataItems)

  return  <ContextShopProvider.Provider value={{dataItems,addItems,deleteItems,changeValue,totalPrice,deleteAllItems}}>{props.children}</ContextShopProvider.Provider>

}

export default Contextshop