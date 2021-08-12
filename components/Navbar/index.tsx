// Import Modules
import React from 'react';
import Link from 'next/link';

// Import Menu List
import menuList from './menuList';

const Navbar : React.FC = () => {
  return (
    <header className="navbar">
      <img className="navbar-img" src="/images/navbar/zigzag-background.png" alt="Navbar" />
      <div className="menu">
        {menuList.map((menu) => (
          <Link key={menu} href={menu}>
            <a className="menu-list">
              {menu !== '/' 
                ? <span>{menu}</span>
                : (
                  <img src="/images/navbar/wowmen-logo.png" />
                )}
            </a>
          </Link>
        ))}
      </div>
    </header>
  );
};
 
export default Navbar;