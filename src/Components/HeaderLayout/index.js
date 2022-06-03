import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './HeaderLayout.css';
import logo from '../../asset/logo.png';

const HeaderLayout = () => {
  const { pathname } = useLocation();
  return (
    <div className="page">
      {/* header */}
      <header className="header">
        <div className="header_inner">
          <Link to="/" className="logo_container">
            {/* <h1>부산축제정보</h1> */}
            <img src={logo} alt="logo" width={120} />
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
                Issue
              </Link>
            </ul>
          </nav>
        </div>
      </header>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default HeaderLayout;
