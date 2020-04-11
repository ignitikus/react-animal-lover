import React, { Component } from 'react'
import './AddForm.css'

export default class AddForm extends Component {
   render() {
      return (
         <div id='form-container'>
            <form className="ui form" style={{
               marginLeft:0
            }} onSubmit={this.props.addAnimal}>
               <div className="field">
                  <label>Image URL</label>
                  <input 
                     type="text" 
                     name="image" 
                     placeholder="Image URL" 
                     value={this.props.newAnimal.image}
                     onChange={this.props.handleChange}
                     />
               </div>
               <div className="field">
                  <label>Name</label>
                  <input 
                     type="text" 
                     name="name" 
                     placeholder="Name" 
                     value={this.props.newAnimal.name}
                     onChange={this.props.handleChange}
                     />
               </div>
               <div className="field">
                  <label>Genus</label>
                  <input 
                     type="text" 
                     name="type" 
                     placeholder="Type of animal" 
                     value={this.props.newAnimal.type}
                     onChange={this.props.handleChange}
                     />
               </div>
               <div className="field">
                  <label>Description</label>
                  <input 
                     type="text" 
                     name="description" 
                     placeholder="Description" 
                     value={this.props.newAnimal.description}
                     onChange={this.props.handleChange}
                     />
               </div>
               <button className="ui button" type="submit">Submit</button>
            </form>
         </div>
      )
   }
}
