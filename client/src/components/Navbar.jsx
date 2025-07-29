
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Dashboard</Link>
    <Link to="/expenses">Expenses</Link>
    <Link to="/reports">Reports</Link>
    <Link to="/login">Logout</Link>
  </nav>
);

export default Navbar;
