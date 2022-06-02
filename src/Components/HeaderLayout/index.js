import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './HeaderLayout.css';

const HeaderLayout = () => {
  const { pathname } = useLocation();
  return (
    <div className="page">
      {/* header */}
      <header className="header">
        <div className="header_inner">
          <Link to="/" className="logo_container">
            <h1>부산축제정보</h1>
          </Link>
          <nav className="menu_container">
            <ul className="menu">
              <Link
                to="/"
                className={`top_menu ${pathname === '/' && 'active'}`}
              >
                Home
              </Link>
              <Link
                to="/festival"
                className={`top_menu ${pathname === '/festival' && 'active'}`}
              >
                Festival
              </Link>
              {/* <Link
                to="/festivalDetailed"
                className={`top_menu ${
                  pathname === '/festivalDetailed' && 'active'
                }`}
              >
                FestivalDetailed
              </Link> */}
              <Link
                to="/about"
                className={`top_menu ${pathname === '/about' && 'active'}`}
              >
                About
              </Link>
            </ul>
          </nav>
        </div>
      </header>
      <div>
        <Outlet />
      </div>
      {/* <div className="footer-gasiki"></div> */}
    </div>
  );
};

export default HeaderLayout;
