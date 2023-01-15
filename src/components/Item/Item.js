import './Item.css'

const Item=({producto})=> {
return (
    <ul className='ProductListContainer'>
        <li className='ProductImage' key={producto.id}><img src={producto.pictureUrl} width={150} /></li>
        <div className='ProductBack'>
        <li className='ProductName' key={producto.id}>{producto.title}</li>
        <li className='ProductPrice' key={producto.id}>${producto.price}</li>
        <li className='ProductStock'>x lefts</li>
        <button className='AddCart'>Add</button>
        </div>
    </ul>
)
}

export default Item;