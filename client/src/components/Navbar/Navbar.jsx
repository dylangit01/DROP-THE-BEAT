import React from 'react';
import './Navbar.scss';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <h1>I am Navbar</h1>
        <Link to="/"> Home    </Link>
        <Link to="/playlists"> My playlists    </Link>
        <Link to="/game"> My game    </Link>
      </nav>
    </div>
  );
};