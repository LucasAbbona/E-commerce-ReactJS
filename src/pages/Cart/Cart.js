import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import CartBtns from "../../components/CartBtns/CartBtns"
import './cart.css'

const Cart = () => {
    const {removeItem} = useContext(cartContext)
    const {cart} = useContext(cartContext)
    return (
        <div className="CartContainer">
        <div className="SubCont1">
            {(cart.length !== 0) ? 
            <div className="TableGuide">
            <p>Product Image</p>
            <p>Product</p>
            <p>Category</p>
            <p>Price</p>
            <p>Quantity</p>
            </div> : ""}
            {cart.map((producto)=>(
                <div className="SingleProduct" key={producto.id}>
                    <img src={producto.image} width={100}/>
                    <h3>{producto.name}</h3>
                    <p className="CartCat">{producto.category}</p>
                    <p className="CartPric">${producto.price*producto.quantity}<small className="PerUnitPrice"> ${producto.price} Each</small></p>
                    <p className="CartQuant">{producto.quantity}</p>
                    <button className="CartDelete" onClick={()=>removeItem(producto.id)}>Eliminar</button>
                </div>
            ))}
            {(cart.length == 0) ? <CartBtns vacio={"true"} /> : <CartBtns vacio={"false"}/> }
        </div>
        <div className="SubCont2">
            {
                <p>Total: ${cart?.reduce((prev,curr)=>{return prev+curr.quantity*curr.price},0)}</p>
            }
        </div>
        </div>
    )
}

export default Cart