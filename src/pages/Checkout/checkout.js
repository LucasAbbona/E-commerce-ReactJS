import React, { useState,useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import {collection, addDoc, doc, updateDoc, getFirestore} from 'firebase/firestore'
import { cartContext } from '../../context/cartContext'
import './checkout.css'

const Checkout = () => {
  const [Validate,setValidate]=useState(false)
  const [order,setOrder]=useState({})
  const [FormValue, setFormValue]=useState({
    name:"",
    phone:"",
    email:"",
  })
  const {cart} = useContext(cartContext)  
  
  useEffect(()=>{
      setOrder({
        buyer:{name:"Lucas",phone:"+5411865645",email:"some@email.com"},
        items: cart.map(((product)=>{
          return {
            name: product.name,
            price:product.price,
            id:product.id,
            talle:product.talle,
            quantity:product.quantity
          }
        })),
        total: cart.reduce((acc,curr)=>acc+curr.price*curr.quantity,0),
      })
    },[])

    const Finish=(event)=>{
    event.preventDefault();
    const db=getFirestore();
    const QuerySnapshot=collection(db,'order');
    const currentOrder={
      ...order,
      buyer: FormValue,
    }
    addDoc(QuerySnapshot,currentOrder)
    .then((response)=>{
      Swal.fire(
        'Compra Finalizada',
        'Se ha finalizado la compra, tu numero de orden es '+response.id,
        'success'
      )
      UpdateProducts()
    })
    .catch((error)=>console.log(error))
    }

  const HandleInput=(event)=>{
    setFormValue({
      ...FormValue,
      [event.target.name]:event.target.value,
    })
  }
  const HandleInputValidation=(event)=>{
    (FormValue.email === event.target.value) ? setValidate(true) : setValidate(false)
  }
  const UpdateProducts=()=>{
    cart.forEach((product)=>{
      const db=getFirestore();
      const QuerySnapshot=doc(db,'products',product.id);
      updateDoc(QuerySnapshot,{
        stock: product.stock - product.quantity,
      })
      .then((response)=>{
        console.log(response)
      })
      .catch((error)=>{
        console.log(error)
      })
    })
  }
  
  return (
    <div className='CheckOutContainer'>
      <h3>Complete el siguiente formulario para finalizar la compra</h3>
      <form action='' className='FormContainer'>
        <div>
        <label>Nombre Completo</label>
        <input name='name' value={FormValue.name} type="text" onChange={HandleInput}/>
      </div>
      <div>
        <label>Telefono</label>
        <input name='phone' value={FormValue.phone} type="text" onChange={HandleInput}/>
      </div>
      <div>
        <label>Email</label>
        <input name='email' value={FormValue.email} type="text" onChange={HandleInput} />
      </div>
      <div>
        <label>Email Repeat</label>
        <input type="text" onKeyUp={HandleInputValidation}/>
      </div>
      <div className='CheckOutBtns'>
        {(Validate === true) ?
        <button onClick={Finish} type="submit">Finalizar Compra</button>
        : 
        <button disabled type="submit">Finalizar Compra</button>
        }
        
        <Link to={'/cart'}><button>Cancelar</button></Link>
      </div>
      </form>
    </div>
    
  )
}

export default Checkout