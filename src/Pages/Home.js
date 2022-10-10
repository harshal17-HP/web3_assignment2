import React from 'react'
import Header from '../components/Header/Header'
import Paragraph from '../components/Paragraph/Paragraph';
import "./style.css" 
const Home = () => {
  document.title ="Home"
    return (
    <div >
      <div>
         <Header></Header>  
      </div>
      
     <div className='homebody'>
     <h1>ESPORTS </h1>
      
     <div className='background'>
         <Paragraph></Paragraph>
     
      </div>
    
     </div>
    </div>
  )
}

export default Home
