import React from 'react'

export default function Search({searchBar, search}) {
   return (
      <form className='ui form'>
         <div className="field">
            <input 
               onChange={searchBar} 
               type="text" 
               placeholder='Search for a type of an animal...'
               value={search}
               />
         </div>
      </form>
   )
}
