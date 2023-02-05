import CartWidget from "./CartWidget/CartWidget";
import logo from "../logo.png"; 
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './NavBar.css';

const NavBar=()=>{
    return(
    <nav className="navegation">
        <ul className="navegation_list">
            <li className="DropDowns">
        <NavLink className={({ isActive })=> isActive ? 'active' : 'inactive'} to={'/category/'}>
            <div className="categories">
                All
            </div>
        </NavLink>
        <NavLink className={({ isActive })=> isActive ? 'active' : 'inactive'} to={'/category/men'} >
            <div className="categories">
                Men
            </div>
        </NavLink>
            <NavLink className={({ isActive })=> isActive ? 'active' : 'inactive'} to={'/category/women'}>
            <div className="categories" >
                    Women
            </div>
            </NavLink>
            </li>
            <li className="Brand"><Link to={'/'}><img src={logo} width={180} /></Link></li>
            <li className="CarritoLink">
            <Link className="CarritoLinkInner" to={'/cart'}><CartWidget/></Link>
            </li>
        </ul>
    </nav>
    );
}



export default NavBar