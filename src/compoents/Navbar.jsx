import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div style={{
        padding:"30px",
        display:"flex",
        gap:"20px",
        fontSize:"20px",
        border:"1px solid black"
       
    }}>
        <Link to="/">Counter</Link>
        <Link to="/TodoApp">TodoApp</Link>
    </div>
  )
}

export default Navbar