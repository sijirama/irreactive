import React from 'react'
import { useState } from 'react'
import {List } from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom'
import '../style/style.scss'

const Header = () => {

    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }
  
    return (
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            {/* <h1>Irreactive</h1> */}
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <List size={28}/>
          </div>
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/create">Add</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }

export default Header