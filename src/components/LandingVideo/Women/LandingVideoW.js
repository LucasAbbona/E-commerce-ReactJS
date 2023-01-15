import React from 'react'
import './LandingVideoW.css';
import AnuncioW from './AnuncioW.mp4'
import { Link } from 'react-router-dom';
const LandingVideoW = () => {

  return (
        <div className='VideoBlur'>
        <video src={AnuncioW} autoPlay className='Video' poster="https://s01.sgp1.cdn.digitaloceanspaces.com/article/126864-zfwymgwgcj-1567691366.jpeg" loop controlsList="nodownload noremoteplayback" disableremoteplayback muted></video>
        <div className='BackVideo'></div>
        <Link to={"/category/women"}><button className='Women'>Discover Women</button></Link>
        
    </div>
  )
}

export default LandingVideoW