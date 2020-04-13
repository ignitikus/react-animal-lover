import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Search from './Search'
import AnimalCards from './AnimalCards'
import {animals} from '../data/animals.js'
import './Animals.css'
import uniqid from 'uniqid'


export default class Animals extends Component {
   constructor(){
      super()
      this.state={
         animals,
         likes: [],
         dislikes: [],
         search:'',
         newAnimal:{
            image:'',
            name:'',
            type:'',
            description:'',
            animalId:'',
         }
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

   addAnimal = (event) => {
      event.preventDefault()
      const resetNewAnimal = { image:'', name:'', type:'', description:'', animalId:'',}
      const animals = [...this.state.animals]
      const newAnimal = {...this.state.newAnimal}
      newAnimal.animalId = uniqid()
      animals.unshift(newAnimal)
      this.setState({animals, newAnimal:resetNewAnimal})
      event.target.reset()
   }
   
   handleChange = (event) => {
      const newAnimal = {...this.state.newAnimal}
      newAnimal[event.target.name] = event.target.value
      this.setState({newAnimal})
   }
   
   render() {
      return (
         <div id='main-container'>
            <div id='parent-container'>
                  <h1 id='title'>Animal Lover</h1>
                  <Search 
                     searchBar={this.searchBar}
                     search={this.state.search}
                  />
                  <AnimalCards 
                     animals={this.state.animals}
                     search={this.state.search}
                     likeFunc={this.likeFunc}
                     dislikeFunc={this.dislikeFunc}
                     discardFunc={this.discardFunc}
                  />
            </div>
            <Sidebar 
               liked={this.state.likes} 
               disliked={this.state.dislikes} 
               deleteFromSide={this.deleteFromSide}
               newAnimal={this.state.newAnimal}
               addAnimal={this.addAnimal}
               handleChange={this.handleChange}
               />
         </div>
      )
   }
}
