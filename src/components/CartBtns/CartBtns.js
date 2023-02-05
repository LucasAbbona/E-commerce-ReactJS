import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import { Link } from 'react-router-dom'
import './CartBtns.css'

const CartBtns = ({vacio}) => {
    const {clear} = useContext(cartContext)
if(vacio=="true"){
    return (
        <>
        <p className="VacioText">No hay productos en el carrito</p>
        <span className="RedirectContainer">
            <Link to={'/category/'}><button className="RedirectBtn">Ver Productos</button></Link>
        </span>
        </>
      )
}else if(vacio=="false"){
    return (
        <>
        <div className="BtnsContainer">
        <Link to={'/checkout'}><button className="CartFinish">Terminar Compra</button></Link>
        <button className="CartClean" onClick={()=>clear()}>Vaciar Carro</button>
        </div>
        </>
        
    )
}
}

export default CartBtns