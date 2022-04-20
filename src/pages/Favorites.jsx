import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { MdOutlineCancel } from 'react-icons/md';
import Card from '../components/Card';

function Favorites() {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Test Bookmarks</h1>
      </div>

      <div className="d-flex flex-wrap">My bookmarks</div>
    </div>
  );
}

export default Favorites;
