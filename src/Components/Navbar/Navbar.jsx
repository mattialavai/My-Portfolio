import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo2 from '../../assets/logo2.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'work', 'contact'];
      let current = 'home';

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = id;
            break;
          }
        }
      }

      setMenu(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='navbar'>
      <img src={logo2} alt='site logo' />

      {!isMenuOpen && (
        <img
          src={menu_open}
          onClick={toggleMenu}
          alt='Open menu'
          className='nav-mob-open'
        />
      )}

      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <img
          src={menu_close}
          onClick={closeMenu}
          alt='Close menu'
          className='nav-mob-close'
        />
        {['home', 'about', 'services', 'work', 'contact'].map((item) => (
          <li key={item}>
            <AnchorLink
              className='anchor-link'
              href={`#${item}`}
              offset={50}
              onClick={() => {
                setMenu(item);
                closeMenu();
              }}
            >
              <p>{item.charAt(0).toUpperCase() + item.slice(1)}</p>
            </AnchorLink>
            {menu === item && <img src={underline} alt='underline' />}
          </li>
        ))}
      </ul>

      <div className='nav-connect'>
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          Let's Connect
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
