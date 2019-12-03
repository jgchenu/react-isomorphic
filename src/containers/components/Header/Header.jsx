import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <p><Link to="/">Home</Link></p>
      <p><Link to="/login">Login</Link></p>
    </header>
  );
}

export default Header;
