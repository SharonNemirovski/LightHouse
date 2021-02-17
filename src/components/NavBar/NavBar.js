import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as BsIcons from 'react-icons/bs';
import { SideBarData } from './NavBarData';
import { SideBarDataSmall } from './NavBarData';
import Logo2 from '../../assests/clearLIGHT.png';
import './NavBar.scss';

function NavBar() {
  const [Sidebar, SetSidebar] = useState(false);
  const showSideBar = () => SetSidebar(!Sidebar);

  return (
    <div>
      <nav className={Sidebar ? 'small-nav active' : 'small-nav'}>
        <ul className="nav-menu-items-small">
          <Link to="#" className="menu-bars-small">
            <img
              src={Logo2}
              alt="logo"
              onClick={showSideBar}
              className="logo"
            />
          </Link>
          {SideBarDataSmall.map((item, index) => {
            return (
              <li
                key={index}
                className={
                  document.URL.includes(item.path)
                    ? item.activeClassName
                    : item.className
                }
                onClick={(item.className = 'small-nav-text')}
              >
                <Link to={item.path}>{item.icon}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <nav className={Sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items">
          <Link to="#" className="menu-bars">
            <BsIcons.BsArrowBarRight
              onClick={showSideBar}
              className="closeIcon"
            />
          </Link>
          {SideBarData.map((item, index) => {
            return (
              <li
                key={index}
                className={
                  document.URL.includes(item.path)
                    ? item.activeClassName
                    : item.className
                }
                onClick={showSideBar}
              >
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className={Sidebar ? 'frosted fade-in' : ''}></div>
    </div>
  );
}

export default NavBar;
