
import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'



import Searchbar from './Searchbar'
import './Navbar.css'
import React from 'react'

 
export default function navbar() {
 // eslint-disable-next-line react-hooks/rules-of-hooks
 const {color}=useTheme()

  return (
    <div className='navbar' style={{background:color}}>
    <nav>
    <Link to="/" className='brand'>
        <h1>Recipedia</h1>
    </Link>
    <Searchbar></Searchbar>
    <Link to="/create">
    <h1>Create Recipe</h1>
    </Link>
    </nav>
    </div>
  )
}
