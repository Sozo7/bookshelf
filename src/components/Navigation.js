import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
return (
    <div>
        <NavLink to="/">Home </NavLink>
        <NavLink to="/about">  </NavLink>
        <NavLink to="/contact">Top 20 Books </NavLink>
    </div>
)}

export default Navigation;