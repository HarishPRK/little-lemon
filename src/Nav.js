import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

function Nav() {
  return (
    // Add role="navigation" for explicit landmark
    <nav className="app-nav" role="navigation">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li> {/* Placeholder path */}
        <li><Link to="/menu">Menu</Link></li> {/* Placeholder path */}
        <li><Link to="/booking">Reservations</Link></li> {/* Changed from /reservations */}
        <li><Link to="/order">Order Online</Link></li> {/* Placeholder path */}
        <li><Link to="/login">Login</Link></li> {/* Placeholder path */}
      </ul>
    </nav>
  );
}

export default Nav;
