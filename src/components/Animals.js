import React, { Component } from 'react'
import Sidebar from './Sidebar'
import './Animals.css'

const animals = [
   {
      image: 'fox1.jpg',
      type: 'Vulpes',
      name: 'Scout',
      description: 'Scout is chilling on a snow bed',
      animalId: 'fox1'
   },
   {
      image: 'fox2.jpg',
      type: 'Vulpes',
      name: 'Autumn',
      description: 'Autumn is ready to snack on your chicken',
      animalId: 'fox2'
   },
   {
      image: 'fox3.jpg',
      type: 'Vulpes',
      name: 'Kit',
      description: 'Kit is not sure if she turned off the stove',
      animalId: 'fox3'
   },
   {
      image: 'fox4.jpg',
      type: 'Vulpes',
      name: 'Arvi',
      description: 'Arvi is small, but determined',
      animalId: 'fox4'
   },
   {
      image: 'penguin1.jpg',
      type: 'Aptenodytes',
      name: 'Flipperstein',
      description: 'Flipperstein tired of his fame',
      animalId: 'penguin1'
   },
   {
      image: 'penguin2.jpeg',
      type: 'Aptenodytes',
      name: 'Flapperson',
      description: 'Flapperson is done with the quarantine',
      animalId: 'penguin2'
   },
   {
      image: 'penguin3.jpg',
      type: 'Aptenodytes',
      name: 'Fishface group',
      description: 'Fishface group is known for their fishing abilities',
      animalId: 'penguin3'
   },
   {
      image: 'penguin4.jpg',
      type: 'Aptenodytes',
      name: 'Beakerson',
      description: 'Beakerson is not sure about your fashion sense',
      animalId: 'penguin4'
   },
   {
      image: 'wolf1.jpg',
      type: 'Canis',
      name: 'Frost',
      description: 'Frost is single and ready to mingle',
      animalId: 'wolf1'
   },
   {
      image: 'wolf2.jpg',
      type: 'Canis',
      name: 'Stalker',
      description: 'Stalker is looking for his keys',
      animalId: 'wolf2'
   },
   {
      image: 'wolf3.jpg',
      type: 'Canis',
      name: 'Fang',
      description: '"Maybe you shouldn\'t smile, Fang"',
      animalId: 'wolf3'
   },
   {
      image: 'wolf4.jpg',
      type: 'Canis',
      name: 'Sierra',
      description: 'Sierra is looking for experienced nanny',
      animalId: 'wolf4'
   },
]


export default class Animals extends Component {
   constructor(){
      super()
      this.state={
         animals,
         likes: [],
         dislikes: [],
         search:''
      }
   }
   deleteFromSide = (id) => {
      const likes = this.state.likes.filter(animal=>animal.animalId !== id)
      const dislikes = this.state.dislikes.filter(animal=>animal.animalId !== id)
      this.setState({likes, dislikes})
   }
   
   likeFunc = (animalId) => {
      const likedAnimal = this.state.animals.filter(animal=> animal.animalId === animalId)[0]
      const likes = [...this.state.likes]
      if(!likes.includes(likedAnimal)){
         if(!this.state.dislikes.includes(likedAnimal)){
            likes.push(likedAnimal)
         }
      }
      this.setState({likes})
   }

   dislikeFunc = (animalId) => {
      const dislikedAnimal = this.state.animals.filter(animal=> animal.animalId === animalId)[0]
      const dislikes = [...this.state.dislikes]
      if(!dislikes.includes(dislikedAnimal)){
         if(!this.state.likes.includes(dislikedAnimal)){
         dislikes.push(dislikedAnimal)
         }
      }
      this.setState({dislikes})
   }

   discardFunc = (animalId) => {
      const animals = this.state.animals.filter(animal=> animal.animalId !== animalId)
      const likes = this.state.likes.filter(animal=> animal.animalId !== animalId)
      const dislikes = this.state.dislikes.filter(animal=> animal.animalId !== animalId)
      this.setState({animals, likes, dislikes})
   }
   
   searchBar = (event) => {
      this.setState({search: event.target.value.trim()})
   }
   

   render() {
      return (
         <div id='main-container'>
            <div id='parent-container'>
               <div>
                  <h1 id='title'>Animal Lover</h1>
                  <form className='ui form'>
                     <div className="field">
                        <input 
                           onChange={this.searchBar} 
                           type="text" 
                           placeholder='Search for a type of an animal...'
                           value={this.state.search}
                           />
                     </div>
                  </form>
                  <div id='animals-container'>
                     {this.state.animals.filter(animal => animal.type.toLowerCase().includes(this.state.search.toLowerCase())).map(({image, type, name, description, animalId})=>{
                        return (
                           <div key={animalId} className="ui card">
                              <div className="image">
                                 <img src={`/images/${image}`} className='card-image' alt='...'/>
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
                                    <button onClick={() => this.likeFunc(animalId)} className="ui blue button">Like</button>
                                    <button onClick={() => this.dislikeFunc(animalId)} className="ui red button">Dislike</button>
                                    <button onClick={() => this.discardFunc(animalId)} className="ui grey button">Discard</button>
                              </div>
                           </div>
                        )
                     })}
                  </div>
               </div>
            </div>
            <Sidebar liked={this.state.likes} disliked={this.state.dislikes} deleteFromSide={this.deleteFromSide}/>
         </div>
      )
   }
}
