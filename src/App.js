import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdBookmarkBorder } from 'react-icons/md';
import { MdBookmark } from 'react-icons/md';
import { MdBookmarks } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';

import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Movies</h1>
          <div className="search-block">
            <BiSearch className="bisearch1" />
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
