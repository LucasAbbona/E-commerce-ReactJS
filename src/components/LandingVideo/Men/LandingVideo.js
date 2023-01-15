import React from 'react'
import './LandingVideo.css';
import Anuncio from './Anuncio.mp4'
import { Link } from 'react-router-dom';
const LandingVideo = () => {

  return (
        <div className='VideoBlur'>
        <video src={Anuncio} autoPlay className='Video' poster="https://s01.sgp1.cdn.digitaloceanspaces.com/article/126864-zfwymgwgcj-1567691366.jpeg" loop controlsList="nodownload noremoteplayback" disableremoteplayback muted></video>
        <div className='BackVideo'></div>
        <Link to={"/category/men"}><button className='Men'>Discover Men</button></Link>
        
    </div>
  )
}

export default LandingVideo