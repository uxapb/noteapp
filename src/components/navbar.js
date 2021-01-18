import React from 'react'
import './navbar.css'
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-brand">
      Note App
    </div>

    <ul className="navbar-nav"> 
      <li className="nav-item">
        <NavLink className="nav-link" to="/" exact> Главная </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about"> Информация </NavLink>
      </li>
    </ul>
  </nav>
);