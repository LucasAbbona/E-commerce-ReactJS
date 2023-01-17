import React from 'react'
import './LandingSubscribe.css'

const LandingSubscribe = () => {
  return (
    <div className='SubscribeContainer'>
        <p>Recieve all the lastest news subscribing.</p>
        <div className='FormContainer'>
        <input type="text" placeholder='Enter Your Email'/>
        <button>Subscribe</button>
        </div>
    </div>
  )
}

export default LandingSubscribe