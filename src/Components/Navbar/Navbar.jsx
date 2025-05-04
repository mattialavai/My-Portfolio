import React, { useRef, useState, useEffect } from 'react';
import './Navbar.css';
import logo2 from '../../assets/logo2.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = '0';
    menuRef.current.classList.add('active');
  };

  const closeMenu = () => {
    menuRef.current.style.right = '-350px';
    menuRef.current.classList.remove('active');
  };

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'work', 'contact'];
      let current = 'home';

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = sections[i];
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
      <img src={menu_open} onClick={openMenu} alt='' className='nav-mob-open' />
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt='' className='nav-mob-close' />
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => { setMenu('home'); closeMenu(); }}>Home</p></AnchorLink>{menu === 'home' ? <img src={underline} alt='' /> : null}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => { setMenu('about'); closeMenu(); }}>About</p></AnchorLink>{menu === 'about' ? <img src={underline} alt='' /> : null}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => { setMenu('services'); closeMenu(); }}>Services</p></AnchorLink>{menu === 'services' ? <img src={underline} alt='' /> : null}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => { setMenu('work'); closeMenu(); }}>Portfolio</p></AnchorLink>{menu === 'work' ? <img src={underline} alt='' /> : null}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => { setMenu('contact'); closeMenu(); }}>Contact</p></AnchorLink>{menu === 'contact' ? <img src={underline} alt='' /> : null}</li>
      </ul>
      <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Let's Connect</AnchorLink></div>
    </div>
  );
};

export default Navbar;
