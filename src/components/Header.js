import React from 'react';
import { Link } from 'react-router-dom';
import { BiCartAlt } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineHeart } from 'react-icons/ai';

function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="\img\logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">React Store</h3>
            <p className="opacity-10">Best Smartphones Here</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li className="mr-30">
          <BiCartAlt className="Img cu-p" onClick={props.onClickCart} />
          <span>12 999 usd.</span>
        </li>
        <li>
          <Link to="/favorites">
            <AiOutlineHeart className="Img cu-p" />
          </Link>
        </li>
        <li>
          <CgProfile className="Img cu-p" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
