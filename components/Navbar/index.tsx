// Import Modules
import React from 'react';
import Link from 'next/link';

// Import Menu List
import menuList from './menuList';

const Navbar : React.FC = () => {
  return (
    <header className="navbar">
      <img className="navbar-img" src="/images/navbar/navbarBackground.png" alt="Navbar" />
      <div className="menu">
        {menuList.map((menu) => (
          <Link key={menu} href={menu}>
            <a className="menu-list">
              {menu === '/' 
                ? 
                (
                  <img style={{ width: 'clamp(30px, 25%, 120px)' }} src="/images/navbar/home.svg" />
                ) 
                : (menu === 'wowmen-academy')
                  ?
                  (
                    <img src="/images/navbar/wowmenLogo.png" />
                  )
                  :
                  <span>{menu}</span>}
            </a>
          </Link>
        ))}
      </div>
    </header>
  );
};
 
export default Navbar;
