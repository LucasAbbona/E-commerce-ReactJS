import { FaShoppingBag } from 'react-icons/fa';
import '../NavBar.css';
import { useContext, useState, useEffect } from 'react';
import { cartContext } from '../../../context/cartContext';

const CartWidget= ()=>{
    const {cart}= useContext(cartContext)
    const [total,setTotal]=useState(0)
    useEffect(()=>{
        const totalCart= cart?.reduce((prev,curr)=>{return prev+curr.quantity},0)
        setTotal(totalCart)
    },[cart]);

    return <li className='Cart'><a href="" className='bolsa'><FaShoppingBag  /><p className='carrito'>{total}</p></a></li>

}

export default CartWidget;