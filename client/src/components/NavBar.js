import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
      <div>
          <nav className="nav-bar">
            <Link to='/'> Home </Link>
            <Link to='/bills'> Bills </Link>
          </nav>
      </div>
    )
}

export default NavBar