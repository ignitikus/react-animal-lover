import React, { Component } from 'react'
import './Sidebar.css'

export default class Sidebar extends Component {
   render() {
      return (
         <div id='sidebar-container'>
            <div id='likes-container' readOnly>
               <div className="ui input" style={{width:'30px'}}>
                        <input 
                           type="text" 
                           id='likes-counter'
                           style={{
                              padding:0,
                              margin:0
                           }}
                           value={this.props.liked.length} 
                           readOnly
                        />
               </div>
               <h2 id='likes-h2' style={{
                  marginBottom:'25px'
               }}>Likes</h2>
            </div>
            {this.props.liked.length<1 && 
               <p> No likes</p>
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
            <div id='likes-container' readOnly>
               <div className="ui input" style={{width:'30px'}}>
                        <input 
                           type="text" 
                           id='likes-counter'
                           style={{
                              padding:0,
                              margin:0
                           }}
                           value={this.props.disliked.length} 
                           readOnly
                        />
               </div>
               <h2 id='likes-h2' style={{
                  marginBottom:'25px'
               }}>Dislikes</h2>
            </div>
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