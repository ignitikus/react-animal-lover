import React from 'react'
import './Sidebar.css'

export default function Sidebar(props) {
   return (
      <div id='sidebar-container'>
         <h2>Likes</h2>
         {props.liked.map(({image, type, name, description, animalId})=>{
            return (
               <div key={animalId} className="ui card" id='card-container'>
                  <div className="image">
                     <img src={`/images/${image}`} className='card-image' alt='...'/>
                  </div>
                  <div className="content" id='header-container'>
                     <div className="header">{name}</div>
                  </div>
               </div>
            )
         })}
         <h2>Dislikes</h2>
         {props.disliked.map(({image, type, name, description, animalId})=>{
            return (
               <div key={animalId} className="ui card" id='card-container'>
                  <div className="image">
                     <img src={`/images/${image}`} className='card-image' alt='...'/>
                  </div>
                  <div className="content" id='header-container'>
                     <div className="header">{name}</div>
                  </div>
               </div>
            )
         })}
      </div>
   )
}
