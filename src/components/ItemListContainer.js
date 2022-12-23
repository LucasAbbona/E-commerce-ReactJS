import './styles.css';
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
        <div className='landing_img'>
            <div id='landing_bg' className='landing_blur'>
                <h2 className='landing_title'>Bienvenidos a {brand}</h2>
                <button id='shop' onMouseOver={Shopping} onMouseLeave={LeavingShopBtn} className='landing_btn'>Shop Now</button>
            </div>
        </div>
    );
}

export default Landing