import { Link } from 'react-router-dom'
import trashcan from '../assets/trashcan.svg'

import './RecipeList.css'
import React from 'react'
import { useTheme } from '../hooks/useTheme'
import { projectFirestore } from '../firebase/config'

export default function RecipeList({recipes}) {
  
  const {mode}=useTheme()
  
  if(recipes.length ===0)
  return <div className='error'>No reecipes found.... </div>
  
  const handleClick=(id)=>{
    projectFirestore.collection('recipes').doc(id).delete();
  }
  return (
    <div className='recipe-list'>
        {recipes.map( recipe =>(
            <div key={recipe.id} className={`card ${mode}`}>
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime} to make.</p>
            <div>{recipe.method.substring(0,100)}...</div>
                <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
                <img src={trashcan} className='delete' onClick={()=> handleClick(recipe.id)}alt='delete'/>
            </div>
        ))}
    </div>
  )
}
