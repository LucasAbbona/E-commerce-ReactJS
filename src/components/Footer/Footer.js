import React from 'react'
import logo from './logo.png';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <div className='FooterContainer'>
        <div className='Links'>
        <ul>
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
        </ul>
        </div>
        <div className='Social'>
            <p>Follow us</p>
            <div>
            <FaInstagram className='Media' />
            <FaTwitter className='Media' />
            </div>
        </div>
        <div className='Logo'>
            <img src={logo} width={150}/>
        </div>
        <div className='Payment'>
            <p>Payment Methods</p>
            <img src='https://cdn11.bigcommerce.com/s-x7habvccrj/product_images/uploaded_images/payment-methods.png' width={300}/>
        </div>
        <div className='Copy'>
            <p>@ All rights reserved to Lucas Abbona </p>
        </div>
    </div>
  )
}

export default Footer