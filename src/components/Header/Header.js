import React from 'react';

import './Header.css';

const Header = () => {
  return (
    <header className="Header">
      <img src={process.env.PUBLIC_URL + '/logo-codemafia.png'} className="App-logo" alt="logo" />
      <h1 className="Header__Title">Welcome to React</h1>
    </header>
  );
}
 
export default Header;
