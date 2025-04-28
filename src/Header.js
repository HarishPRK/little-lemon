import React from 'react';
import Nav from './Nav'; // Import the Nav component
import logo from './assets/little-lemon-logo.jpg'; // Import the logo image

function Header() {
  return (
    <header className="app-header">
      {/* Use the imported logo */}
      <img src={logo} alt="Little Lemon Logo" /> {/* Use imported variable */}
      <Nav /> {/* Render Nav component inside Header */}
    </header>
  );
}

export default Header;
