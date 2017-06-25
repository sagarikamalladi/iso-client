import React from 'react';
import {NavLink} from 'react-router-dom';

const HeaderComponent = (props) => (
  <header className="Header">
    <img src="http://lorempixel.com/80/80" alt="logo" className="Header-image"/>
    <div className="Header-search">
      <form className="Header-search__form" onSubmit={props.onSearch}>
        <input className="Header-search__field" name="search" id="search" type="text" placeholder="Search question..."
               required/>
        <span className="arrow">
          <input className="Header-search__button" type="submit" value="Search"/>
        </span>
      </form>
    </div>
    <div className="Header-menu">
      <ul>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/signup'>Sign Up</NavLink></li>
      </ul>
    </div>
  </header>
);

export default HeaderComponent;