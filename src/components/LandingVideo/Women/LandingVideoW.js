import React from 'react'
import './LandingVideoW.css';
import AnuncioW from './AnuncioW.mp4'
import { Link } from 'react-router-dom';
const LandingVideoW = () => {

  return (
        <div className='VideoBlur'>
        <video src={AnuncioW} autoPlay className='Video' poster="https://www.numeromag.nl/wp-content/uploads/2022/04/chanel_chanel-22-bag_ad-campaign-by-inez-and-vinoodh-1-HD-1024x668.jpg" loop controlsList="nodownload noremoteplayback" disableremoteplayback muted></video>
        <div className='BackVideo'></div>
        <Link to={"/category/women"}><button className='Women'>Discover Women</button></Link>
        
    </div>
  )
}

export default LandingVideoW