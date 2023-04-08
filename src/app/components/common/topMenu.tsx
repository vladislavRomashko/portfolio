import React from 'react';
import logo from '../../images/v-logo.jpg';
import { Link } from 'react-router-dom';

const TopMenu = () => {
  return (
    <div className="main-menu__top">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </div>
  );
};

export default TopMenu;
