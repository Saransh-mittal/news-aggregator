import React , {useContext, useEffect} from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { AppContext } from '../contextAPI/appContext';
import axios from 'axios';

const Navbar = () => {
  const { state, dispatch } = useContext(AppContext);
  useEffect(()=>{},[state.show]);
  const handleLogout = async() => {
    try {
      await axios.post('/api/logout');
      dispatch({type: "SHOW"});
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
        📻  Rapid Recap
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/About" className="nav-link">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact Us
              </NavLink>
            </li>
            {state.show ? <li className="nav-item">
              <NavLink to="/signin" className="nav-link">
                Sign In
              </NavLink>
            </li> : ""}
            {!state.show ?<li className="nav-item" >
              <button className="nav-link" onClick={handleLogout}>
                Logout
              </button>
            </li> : ""}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
