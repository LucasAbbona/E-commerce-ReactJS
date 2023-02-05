import './ItemCount.css'
import Swal from 'sweetalert2'

const ItemCount = ({contador, Update, stock}) => {
    const restar= ()=>{
        if(contador<=1){
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `No se puede agregar 0 productos.`,
            })
        }
        Update(contador-1);
    }
    const sumar = () =>{
        if(stock === contador){
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `No se puede agregar mas de ${stock} productos.`,
            })
        }
        Update(contador+1);
    }
    
    return(
        <div className='contador'>
            <div>
                <button className='botonContador' onClick={sumar}>+</button>
            <span>{contador}</span>
            <button className='botonContador' onClick={restar}>-</button>
            </div>
        </div>    
    )
}

export default ItemCount;