import Cart from "./CartWidget/CartWidget";
import './NavBar.css';
import logo from "../logo.png"; 
import { Link } from "react-router-dom";
import Landing from "../../pages/Landing/Landing";
import { NavLink } from "react-router-dom";
const NavBar=()=>{

    return(
    <nav className="navegation">
        <ul className="navegation_list">
            <li className="DropDowns">
        <Link to={'/category/all'}>
            <div className="categories">
                All
            </div>
        </Link>
        <NavLink className={({ isActive })=> isActive ? 'active' : 'inactive'} to={'/category/men'} >
            <div className="categories">
                Men
            </div>
            </NavLink>
            <Link to={'/category/women'}>
                <div className="categories" >
                    Women
            </div>
            </Link>
            </li>
            <li className="Brand"><Link to={'/'}><img src={logo} width={180} /></Link></li>
            
            <Cart/>
        </ul>
    </nav>
    );
}



export default NavBar