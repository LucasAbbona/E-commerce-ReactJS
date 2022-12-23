import Cart from "./CartWidget";
import './styles.css';
import logo from "./logo.png"; 
const NavBar=()=>{
    const DropMen=()=>{
    const e = document.querySelector("#dropM");
    e.className="dspFl"        
    }
    const DropWomen=()=>{
    const e = document.querySelector("#dropW");
    e.className="dspFl"
    }
    const OcultMen=()=>{
    const el = document.querySelector("#dropM");
    el.className="apagado"
    }
    const OcultWomen=()=>{
    const e = document.querySelector("#dropW");
    e.className="apagado"
    }

    return(
    <nav className="navegation">
        <ul className="navegation_list">
            <li className="DropDowns">
            <div>
                <a className="categories" href="">All</a>
            </div>
            <div><a className="categories" onMouseOver={DropMen} href="">Men</a>
                <ul className="apagado" onMouseLeave={OcultMen} id="dropM">
                    <li><a href="">Trajes</a></li>
                    <li><a href="">Polos</a></li>
                    <li><a href="">Pantalones</a></li>
                    <li><a href="">Camisas</a></li>
                </ul>
            </div>
            <div><a className="categories" href="" onMouseOver={DropWomen}>Women</a>
                <ul className="apagado" onMouseLeave={OcultWomen} id="dropW">
                    <li><a href="">Vestidos</a></li>
                    <li><a href="">Pantalones</a></li>
                    <li><a href="">Remeras</a></li>
                    <li><a href="">Blusas</a></li>
                </ul>
            </div>
            </li>
            <li className="Brand"><img src={logo} width={180} /></li>
            
            <Cart/>
        </ul>
        
    </nav>
    );
}



export default NavBar