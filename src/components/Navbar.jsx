import React from 'react';
import { Container } from 'react-bootstrap';

import map from '../assets/icons/map.svg';
import search from '../assets/icons/search.svg';
import wishlist from '../assets/icons/search.svg';
import shopingBag from '../assets/icons/shopingBag.svg';
import user from '../assets/icons/user.svg';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav
      className="px-5 py-3"
      style={{
        background: '#004236',
      }}
    >
      <Container>
        <div className="w-full d-flex justify-content-between align-items-center text-white">
        <div className='d-flex gap-2'>
          <span>STORES</span>
          <img src={map} />
        </div>
        <div>
          <img src={logo} />
        </div>
        <div className="d-flex gap-2">
          <img src={search} />
          <img src={shopingBag} />
          <img src={user} />
          <img src={wishlist} />
        </div>
      </div>
      <div className="w-full d-flex justify-content-between">
        <ul>
          <li><a href="#">OFFERS</a></li>
          <li><a href="#">TRENDING</a></li>
          <li><a href="#">SKINCARE</a></li>
          <li><a href="#">HAIR</a></li>
          <li><a href="#">BODY</a></li>
          <li><a href="#">MAKEUP</a></li>
          <li><a href="#">FRAGRANCE</a></li>
          <li><a href="#">MEN</a></li>
          <li><a href="#">GIFT</a></li>
          <li><a href="#">RANGE</a></li>
          <li><a href="#">MEMBERSHIP</a></li>
          <li><a href="#">TIPS & ADVICE</a></li>
          <li><a href="#">DO GOOD WITH US</a></li>
        </ul>
      </div>
      </Container>
    </nav>
  );
}

export default Navbar;