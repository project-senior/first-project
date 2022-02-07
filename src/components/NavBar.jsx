import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function NavBar() {
  const [click, setClick] = useState(false);
  const [count,setcount] = useState(0)
  const money =()=>{
    axios.get(`http://127.0.0.1:3000/api/items/user`)
  }
  const handleClick = () => setClick(!click);
  const toggle =()=> setcount(1)
  return (
    
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            NFT
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/marketplace"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               Market Place
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
           {count !== 0 ? 
            <li className="nav-item">
              <NavLink
                exact
                to="/profile"
                activeClassName="active"
                className="nav-links"
                onClick={toggle}
              >
                Profile
              </NavLink>
            </li>:<li className="nav-item">
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={toggle}
              >
                LogIn
              </NavLink>
            </li>}
            <div id="points">
            <NavLink
                exact
                to="/points"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                0pts
              </NavLink>
           
          </div>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          
        </div>
      </nav>
   
  );
}

export default NavBar;
