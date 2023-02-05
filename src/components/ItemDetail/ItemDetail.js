import { useState, useContext } from 'react';
import { cartContext } from '../../context/cartContext';
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import {BsFillBagCheckFill} from 'react-icons/bs'
import './ItemDetail.css'

function ItemDetail({producto}){
  const [contador, setcontador] = useState(1);
  const {addItem}=useContext(cartContext)
  const {InCart}=useContext(cartContext)

  return (
    <>
    <Link to="/category/"><div className='Volver'>Volver</div></Link>
        <div className='productContainer'>
        <div className='SingleImage'>
        <img src={producto.pictureUrl} width={250}/>
        </div>
        <div className='SingleInfo'>
        <h1>{producto.title}</h1>
        <p>{producto.description}</p>
        <h3>${producto.price}</h3>
        {(InCart(producto.id)) ? 
        <>
        <p>El producto ya se encuentra en el carrito.</p>
        <Link className='GoToCartBtnLink' to={'/cart'}><button className='GoToCartBtn'><BsFillBagCheckFill /> Ir al Carrito</button></Link></> 
        : 
        <>
        <ItemCount contador={contador} Update={setcontador} stock={producto.stock}/>
        <div className='añadir'>
          <button onClick={()=>addItem(producto,contador)}>Add</button>
        </div>
        </>}
        <p className='StockLeft'>{producto.stock} lefts.</p>
        </div>
    </div>
    </>)
  
}

export default ItemDetail