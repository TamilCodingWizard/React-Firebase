import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useThemeContext } from './../../hooks/useThemeContext';
import Appsubmitbutton from "../appsubmitbutton/Appsubmitbutton";
import { useAuthentication } from './../../hooks/useAuthentication';

export default function Navbar() {

  const {theme} = useThemeContext()

  const {logout} = useAuthentication()

  const handleLogout = () => {
    logout()
  }

  return (
    <header className={`${theme}header`}>
      <div className="container">
        <Link to="/">
          <h1>Blog</h1>
        </Link>
        <nav>
          <Link to="/">
            <h4>Home</h4>
          </Link>
          <Link to="/create">
            <h4>Create Post</h4>
          </Link>
          <Link to="/login">
            <h4>Login</h4>
          </Link>
          <Link to="/signup">
            <h4>Signup</h4>
          </Link>
          <Appsubmitbutton title="Logout" onClick={handleLogout}/>
        </nav>
      </div>
    </header>
  );
}
