import React from 'react'

export default function AnimalCards({animals,search, likeFunc, dislikeFunc, discardFunc}) {
   return (
      <div id='animals-container'>
         {animals.filter(animal => animal.type.toLowerCase().includes(search.toLowerCase())).map(({image, type, name, description, animalId})=>{
            return (
               <div key={animalId} className="ui card">
                  <div className="image">
                     <img src={image} className='card-image' alt='animal'/>
                  </div>
                  <div className="content">
                     <div className="header">{name}</div>
                     <div className="meta">
                        <span className="date">{type}</span>
                     </div>
                     <div className="description">
                        {description}
                     </div>
                  </div>
                  <div className="extra content">
                        <button onClick={() => likeFunc(animalId)} className="ui blue button">Like</button>
                        <button onClick={() => dislikeFunc(animalId)} className="ui red button">Dislike</button>
                        <button onClick={() => discardFunc(animalId)} className="ui grey button">Discard</button>
                  </div>
               </div>
            )
         })}
      </div>
   )
}
