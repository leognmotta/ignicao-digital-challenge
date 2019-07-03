import React from "react"

import { Link } from "gatsby"

import logo from "../images/Logo.png"
import "../scss/header.scss"

const Header = () => (
  <header>
    <nav className="nav-bar">
      <Link>Navigation here</Link>
      <Link>About us</Link>
    </nav>

    <div className="logo-container">
      <img className="logo" src={logo} />
    </div>
  </header>
)

export default Header
