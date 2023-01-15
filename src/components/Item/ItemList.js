import './Item.css'
import Item from './Item';
import { Link } from 'react-router-dom';

const ItemList=({productos})=> {
    return (
            <div className='Product_container'>
                {productos.map((producto)=>(
                    <Link key={producto.id} to={`/item/${producto.id}`} className='ProductList'><Item producto={producto} /></Link>
                ))}
            </div>
    )
    }
  
  export default ItemList;