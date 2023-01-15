import React from 'react'
import { Link } from 'react-router-dom'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail({producto}) {
  return (
    producto.map((product)=>
    <>
    <Link to="/category/all"><div className='Volver'>Volver</div></Link>
    <div className='productContainer'>
      
        <div className='SingleImage'>
        <img src={product.pictureUrl} width={250}/>
        </div>
        <div className='SingleInfo'>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
        <ItemCount />
        </div>
    </div></>)
  )
  
}

export default ItemDetail