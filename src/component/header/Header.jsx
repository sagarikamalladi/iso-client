import React from 'react';
import HeaderNav from "./HeaderNav";
import HeaderSearch from "./HeaderSearch";
import Logo from './Logo';


const menuItems = [
  {
    page: '/newQuestion',
    desc: 'New Question'
  },
  {
    page: '/login',
    desc: 'Login'
  },
  {
    page: '/signup',
    desc: 'Sign Up'
  },
];

const HeaderComponent = (props) => (



  <header className="Header">
    <Logo />

    <HeaderSearch
      onHandleSearch={props.onHandleSearch}
    />

    <HeaderNav
      menu={menuItems}
    />
  </header>
);

export default HeaderComponent;
