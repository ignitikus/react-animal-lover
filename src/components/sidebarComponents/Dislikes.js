import React from 'react'

export default function Dislikes({disliked,deleteFromSide}) {
   return (
      <div>
         <div class='likes-container' readOnly>
               <div className="ui input" style={{width:'30px'}}>
                        <input 
                           type="text" 
                           id='likes-counter'
                           style={{
                              padding:0,
                              margin:0
                           }}
                           value={disliked.length} 
                           readOnly
                        />
               </div>
               <h2 id='likes-h2' style={{
                  marginBottom:'25px'
               }}>Dislikes</h2>
            </div>
            {disliked.length<1 && 
               <p style={{textAlign:'center'}}>No dislikes</p>
            }
            {disliked.map(({image, type, name, description, animalId})=>{
               return (
                  <div key={animalId} className="ui card" id='card-container' onClick={() => deleteFromSide(animalId)}>
                     <div className="image">
                        <img src={image} className='card-image' alt='...'/>
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
