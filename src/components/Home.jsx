import React from 'react'
import '../App.css'
import mimimi from '../../src/assets/mimimi.jpg'

const Home = () => {
  return (


    <div className='home'>
     
      <h2 className='saludo'>Hey, I'm Alfio Pulvirenti</h2>
      <br />
      <br />
      <h1 className='tituloa'>Programador Frontend</h1>
      <div className='space'>
        <div className='margintodo'>


          <h3 className='center2'>About me</h3> 
          <p className='margip'>
          
           <h3>
             Call me Alf if we have the opportunity to meet,
              I like music, composing songs, playing basketball,
               I love series and my family, I believe that every moment
                is an opportunity to improve
           </h3> </p>
        </div>

        <div className='mimimi'>
          <img className='modificacion' src={mimimi} alt="" />
        </div>
      </div>
    </div>

  )
}

export default Home
