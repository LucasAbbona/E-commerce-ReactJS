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
  const [FormValue, SetForm]=useState(producto.title == "Zapatos" ? {
    talla:"39"} : {talla:"S"})
  const HandleInput=(event)=>{
    SetForm({
      [event.target.name]:event.target.value,
    })
  }
  const productos={...producto,...FormValue}
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
        {producto.title == "Zapatos" ? 
        <>
        <p>Elige tu talle</p>
        <select name='talla' value={FormValue.talla} onChange={HandleInput}>
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="41">41</option>
        </select>
        </> 
        :
        <>
        <p>Elige tu talle</p>
        <select name='talla' value={FormValue.talla} onChange={HandleInput}>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
        </>
        }
        <h3>${producto.price}</h3>
        {((InCart(productos.id))) ? 
        <>
        <p>El producto ya se encuentra en el carrito.</p>
        <Link className='GoToCartBtnLink' to={'/cart'}><button className='GoToCartBtn'><BsFillBagCheckFill /> Ir al Carrito</button></Link></> 
        : 
        <>
        <ItemCount contador={contador} Update={setcontador} stock={producto.stock}/>
        <div className='añadir'>
          <button onClick={()=>addItem(productos,contador)}>Add</button>
        </div>
        </>}
        <p className='StockLeft'>{producto.stock} lefts.</p>
        </div>
    </div>
    </>)
  
}

export default ItemDetail