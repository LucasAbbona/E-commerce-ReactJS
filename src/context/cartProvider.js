import { useState } from "react";
import { cartContext } from "./cartContext";
import Swal from 'sweetalert2/dist/sweetalert2.js'

const CartProvider = ({children}) => {
  const [cart,setCart]= useState([])
    const addItem=(item,quantity)=>{
      const newProduct = {id: item.id,image: item.pictureUrl ,name: item.title, price: item.price, quantity: quantity, category: item.category,stock: item.stock }
      setCart([...cart,newProduct])
      Swal.fire(
        'Agregado',
        'Has agregado el producto al carrito',
        'success'
      )
    }
    const removeItem=(productoid)=>{
      const res= cart.filter((prod)=> prod.id !== productoid )
      setCart(res)
    }
    const clear=()=>{
        setCart([]);
    }
    const InCart=(id)=>{
      return cart.some((product)=> product.id === id)
    }

  return (
    <cartContext.Provider value={{cart,addItem,removeItem,clear,InCart}}>
        {children}
    </cartContext.Provider>
  )
}

export default CartProvider