import React from "react"

import { Link } from "gatsby"

import logo from "../images/Logo.png"
import "../scss/global-style.scss"
import "../scss/header.scss"

const Header = () => (
  <header className="nav-bar">
    <nav>
      <Link to="/">Navigation here</Link>
      <Link to="/something">About us</Link>
    </nav>

    <div className="logo-container">
      <div className="inner">
        <img className="logo" src={logo} alt="Learn company logo" />
      </div>
    </div>
  </header>
)

export default Header
