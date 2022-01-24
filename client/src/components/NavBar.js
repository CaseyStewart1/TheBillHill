import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
      <div >
          <nav className="nav-bar">
            <Link to='/' id="nav-e"> Home </Link>
            <Link to='/bills' id="nav-e"> Bills </Link>
            <Link to='/profile/:id' id="nav-e"> Profile </Link>
          </nav>
      </div>
    )
}

export default NavBar