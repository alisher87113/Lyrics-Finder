import React from 'react';

const Header = () => {
  return (
    <nav className="nav-wrapper red lighten-1">
      <div className="container">
        <span className="brand-logo left">Lyric Finder</span>
        <ul className="right ">
          <li>
            <a className="flow-text waves-effect">Home</a>
          </li>
          <li>
            <a className="flow-text waves-effect">Favorites</a>
          </li>
          <li>
            <a className="flow-text waves-effect">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
