import React from 'react'
import ws from '../assets/ws.png'
import g from '../assets/logogithub10.png'
import l from '../assets/logol.png'
const Footer = () => {
  return (
    <div className='footer'>
      <a href="https://www.linkedin.com/in/alfio-pulvirenti-604737209/">
        <img className='imgf' src={l} alt="" />
      </a>

      <a href="https://github.com/BleedFeels">
        <img className='imgf' src={g} />
      </a>

      
        <a href="https://wa.link/ap1jlf">
            <img className='imgf' src={ws} alt="" />
        </a>
    

   
    </div>

  )
}

export default Footer