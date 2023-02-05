import './LandingSubscribe.css'

const LandingSubscribe = () => {
  const Outline=()=>{
    let input = document.getElementById("IPT")
    console.log(input.value)
    if(input.value.includes("@"&&".com")){
      input.classList="cumple"
    }else{
      input.classList="nocumple"
    }
  }
  return (
    <div className='SubscribeContainer'>
        <p>Recieve all the lastest news subscribing.</p>
        <form action=''>
        <div className='FormContainer'>
        <input onKeyUp={()=>Outline()} id="IPT" type="text" placeholder='Enter Your Email'/>
        <button type='submit'>Subscribe</button>
        </div>
        </form>
    </div>
  )
}

export default LandingSubscribe