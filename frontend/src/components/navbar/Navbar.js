import React from 'react';
import "./navbar.css";
import { useContext } from "react"
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  


  return (
    <div className="navbar">
      <div className="navContainer">
      <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Sribooking</span>
        </Link>
        {user ? <div className='navItems'>
                  <button className='navButton'>{user.username}</button>
            </div>
          : (
          <div className="navItems">
           <Link to="/register"> <button className="navButton">Register</button></Link> 
             <Link to="/login"><button className="navButton">Login</button></Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar