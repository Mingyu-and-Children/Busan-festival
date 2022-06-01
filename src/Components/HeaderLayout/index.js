import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './HeaderLayout.css';

const HeaderLayout = () => {
  const { pathname } = useLocation();
  return (
    <div className="home-layout-container">
      <div className="left">
        <div className="logo">
          <div className="logo-container">민규와 아이들 LOGO</div>
          <div className="logo-desc">BUSAN FESTIVAL</div>
        </div>
        <div className="menu-container">
          <Link to="/" className={`menu-item ${pathname === '/' && 'active'}`}>
            HOME
          </Link>
          <Link
            to="/festival"
            className={`menu-item ${pathname === '/festival' && 'active'}`}
          >
            FESTIVAL
          </Link>
          <Link
            to="/about"
            className={`menu-item ${pathname === '/about' && 'active'}`}
          >
            ABOUT
          </Link>
        </div>
      </div>
      <div className="right">
        <Outlet />
      </div>
    </div>
  );
};

export default HeaderLayout;
