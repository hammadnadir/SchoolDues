import React from 'react'
import "./styles.scss"
import {Link} from "react-router-dom"

function Header() {
  return (
    <div className='header'>
        <div className='main container'>
      <div className='image' />
      <ul>
        <li>Home</li>
        <li>Skills</li>
        <li>About</li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>
      </div>
    </div>
  )
}

export default Header