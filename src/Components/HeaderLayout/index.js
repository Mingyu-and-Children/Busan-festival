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
          <h1>부산축제정보</h1>
          <nav className="menu_container">
            <ul className="menu">
              <Link
                to="/"
                className={`top_menu ${pathname === '/' && 'active'}`}
              >
                HOME
              </Link>
              <Link
                to="/festival"
                className={`top_menu ${pathname === '/festival' && 'active'}`}
              >
                FESTIVAL
              </Link>
              <Link
                to="/about"
                className={`top_menu ${pathname === '/about' && 'active'}`}
              >
                ABOUT
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
