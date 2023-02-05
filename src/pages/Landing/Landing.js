import { Link } from 'react-router-dom';
import '../ItemListContainer/ItemListContainer.css';
import LandingVideo from '../../components/LandingVideo/Men/LandingVideo';
import LandingVideoW from '../../components/LandingVideo/Women/LandingVideoW';
import LandingAdvs from '../../components/LandingAdvs/LandingAdvs';

const Landing=({brand})=>{

    const Shopping=()=>{
        const e = document.querySelector("#landing_bg");
        e.classList="aumento"
    }
    const LeavingShopBtn=()=>{
        const e = document.querySelector("#landing_bg");
        e.classList.remove("aumento")
        e.classList="landing_blur"
    }

    return (
        <>
        <div className='landing_img'>
            <div id='landing_bg' className='landing_blur'>
                <h2 className='landing_title'>Bienvenidos a {brand}</h2>
                <Link to={'/category/'}><button id='shop' onMouseOver={Shopping} onMouseLeave={LeavingShopBtn} className='landing_btn'>Shop Now</button></Link>
            </div>
        </div>
        <LandingVideo/>
        <LandingVideoW />
        <LandingAdvs />
        </>
    );
}

export default Landing