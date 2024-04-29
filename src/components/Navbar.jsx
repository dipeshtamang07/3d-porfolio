import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 flex justify-center items-center shadow-md rounded-md bg-white">
            <p className="font-bold blue-gradient_text text-xl">DT</p>
        </NavLink>

        <nav className="flex gap-7 text-lg font-medium">
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-500" : "text-black"}>
                About
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "text-blue-500" : "text-black"}>
                Projects
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar