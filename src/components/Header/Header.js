// Header.js
import React from "react"
import "./Header.css" // Import the Header component's CSS file.
import thetaTauLogo from "../../assets/images/logo.png"

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src={thetaTauLogo} alt="Theta Tau Logo" className="header-logo" />
        <div className="header-text">
          <h1 className="header-title">Theta Tau</h1>
        </div>
      </div>
    </header>
  )
}

export default Header
