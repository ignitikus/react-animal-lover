import React, { Component } from 'react'
import './Sidebar.css'

export default class Sidebar extends Component {
   render() {
      return (
         <div id='sidebar-container'>
            <h2 id='likes-h2'>Likes</h2>
            {this.props.liked.length<1 && 
               <p>No likes</p>
            }
            {this.props.liked.map(({image, type, name, description, animalId})=>{
               return (
                  <div key={animalId} className="ui card" id='card-container' onClick={() => this.props.deleteFromSide(animalId)}>
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
            {this.props.disliked.length<1 && 
               <p>No dislikes</p>
            }
            {this.props.disliked.map(({image, type, name, description, animalId})=>{
               return (
                  <div key={animalId} className="ui card" id='card-container' onClick={() => this.props.deleteFromSide(animalId)}>
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
}