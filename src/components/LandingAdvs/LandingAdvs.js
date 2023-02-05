import { Link } from 'react-router-dom'
import './LandingAdvs.css'

const LandingAdvs = () => {
  return (
    <div className='Imagen'>
            <img src='https://prtimes.jp/i/18268/191/origin/d18268-191-9907eec5625a92b3df9e-0.jpg'/>
            <div></div>
            <h2>Ralph Lauren Polos</h2>
        <Link to={'item/kLvFlQkJFHB0DpG6JHNF'}><button className='FMen'>For Men</button></Link>
        <Link to={'item/hJYc8bkMaN5OZpfE46cL'}><button className='FWomen'>For Women</button></Link>
    </div>
  )
}

export default LandingAdvs