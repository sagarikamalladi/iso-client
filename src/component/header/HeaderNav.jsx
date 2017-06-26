import React from 'react';
import {NavLink} from 'react-router-dom';
import uid from 'uid2';

const Nav = (props) => (
  <li
    className="Header-menu__item">
    <NavLink to={props.page}>{props.desc}</NavLink>
  </li>
);


const HeaderNav = (props) => (
  <div className="Header-menu">
    <ul className="Header-menu__items">
      {
        props.menu.map( m => (
          <Nav
            key={uid(4)}
            page={m.page}
            desc={m.desc}
          />
        ))
      }
    </ul>
  </div>
);

export default HeaderNav;