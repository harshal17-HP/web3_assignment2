import React from 'react'
import Header from '../components/Header/Header'
import Card from '../components/Card/card'
import Dota from './dota.jpg'
import Valorant from './valorant.jpg'
import Fifa from './fifa.jpg'
import Csgo from './csgo.jpg'

const info= [{"name":"Dota", "Price":"Free to play", "Rating":"⭐⭐⭐⭐" ,"Image":"https://howlongtobeat.com/games/250px-DotA2.jpg"},
{"name":"Valorant", "Price":"Free to play", "Rating":"⭐⭐⭐⭐⭐" ,"Image":"https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/VALportrait_1200x1600-74261a10f40a6a5015f069ddb7aa910c?h=854&resize=1&w=640"},
{"name":"Fifa 23", "Price":"3499 ₹", "Rating":"⭐⭐⭐" ,"Image":"https://cdn1.epicgames.com/offer/f5deacee017b4b109476933f7dd2edbd/EGS_EASPORTSFIFA23StandardEdition_EACanada_S2_1200x1600-c806355d9cc8b35ebe392f2a7db03075?h=854&resize=1&w=640"},
{"name":"CS:GO", "Price":"Free to play", "Rating":"⭐⭐⭐⭐" ,"Image":"https://upload.wikimedia.org/wikipedia/en/6/6e/CSGOcoverMarch2020.jpg"}]

const Games = () => {
  document.title ="Games"
  console.log(info)
  return (
    <div>
      <Header/>
  
      <div className='body'>
        <div className='plates'>
          {info.map((value,index)=>{
              return <Card name={value.name} price={value.Price} rating={value.Rating} image={value.Image}/> 

          })}

        </div>
      </div>
    </div>
  )
}

export default Games
