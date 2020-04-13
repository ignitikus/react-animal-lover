import React from 'react'
import './AddForm.css'

export default function AddForm({newAnimal, handleChange, addAnimal}) {
      return (
         <div id='form-container'>
            <form className="ui form" style={{
               marginLeft:0
            }} onSubmit={addAnimal}>
               <div className="field">
                  <label>Image URL</label>
                  <input 
                     type="text" 
                     name="image" 
                     placeholder="Image URL" 
                     value={newAnimal.image}
                     onChange={handleChange}
                     />
               </div>
               <div className="field">
                  <label>Name</label>
                  <input 
                     type="text" 
                     name="name" 
                     placeholder="Name" 
                     value={newAnimal.name}
                     onChange={handleChange}
                     />
               </div>
               <div className="field">
                  <label>Genus</label>
                  <input 
                     type="text" 
                     name="type" 
                     placeholder="Type of animal" 
                     value={newAnimal.type}
                     onChange={handleChange}
                     />
               </div>
               <div className="field">
                  <label>Description</label>
                  <input 
                     type="text" 
                     name="description" 
                     placeholder="Description" 
                     value={newAnimal.description}
                     onChange={handleChange}
                     />
               </div>
               <button className="ui button" type="submit">Submit</button>
            </form>
         </div>
      )
}
