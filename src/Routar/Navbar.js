import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'
const Navbar = () => {
  return (
    <div>
      {/* <ul>
        <li> <a href='/'>HOME</a> </li>
        <li> <a href='/about'>ABOUT</a> </li>
        <li> <a href='/contect'>CONTECT</a> </li>
      </ul> */}

    {/* <ul>
        <li> <Link to='/'>HOME</Link> </li>
        <li> <Link to='/about'>ABOUT</Link> </li>
        <li> <Link to='/contect'>CONTECT</Link> </li>
      </ul> */}


     <ul>
        <li> <NavLink to='/'>HOME</NavLink> </li>
        <li> <NavLink to='/about'>ABOUT</NavLink> </li>
        <li> <NavLink to='/contect'>CONTECT</NavLink> </li>
        <li> <NavLink to='/product/mobile'>MOBILE-LIST</NavLink> </li>
      </ul>
    </div>
  )
}

export default Navbar
