import { useState } from 'react';
import './ItemCount.css'
const ItemCount = () => {
    const [contador, setcontador] = useState(0);
    const stock = 10;
    const restar= ()=>{
        if(contador==0){
            return alert("No se puede comprar menos de 0 productos");
        }
        setcontador(contador-1);
            }
    
    const sumar = () =>{
        if(stock === contador){
            return alert(`No se puede comprar mas de ${stock} productos`);
        }
        setcontador(contador+1);

            }
    
    return(
        <div className='contador'>
            <div>
                <button className='boton' onClick={sumar}>+</button>
            <span>{contador}</span>
            <button className='boton' onClick={restar}>-</button>
            </div>
            <div className='añadir'>
                <button>Add</button>
            </div>
        </div>
        
    )
}

export default ItemCount;