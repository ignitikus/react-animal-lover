import React from 'react'
import AddForm from './AddForm'
import Likes from './sidebarComponents/Likes.js'
import Dislikes from './sidebarComponents/Dislikes.js'
import './Sidebar.css'

export default function Sidebar({liked,disliked,deleteFromSide,newAnimal,addAnimal,handleChange}) {
      return (
         <div id='sidebar-container'>
            <Likes 
               liked={liked}
               deleteFromSide={deleteFromSide}
            />
            <hr style={{
               marginTop:'10px',
               display:'block',
               height:'1px',
               width: '100%',
               backgroundColor:'lightGrey',
            }}/>
            <Dislikes 
               disliked={disliked}
               deleteFromSide={deleteFromSide}
            />
            <hr style={{
               marginTop:'10px',
               display:'block',
               height:'1px',
               width: '100%',
               backgroundColor:'lightGrey',
            }}/>
            <AddForm 
               newAnimal={newAnimal}
               addAnimal={addAnimal}
               handleChange={handleChange}
            />
         </div>
      )
}