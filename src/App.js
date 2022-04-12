import React from 'react';
import { BiSearch } from 'react-icons/bi';

import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {
    title: 'Movie about black panther and marvel indistry',
    price: 12999,
    imgUrl: 'img/jumanji.jpg',
  },
  {
    title: 'Film with dark motivation',
    price: 13200,
    imgUrl: 'img/tintin.jpg',
  },
  {
    title: 'Hollywood poema about winter and crazy people ',
    price: 15600,
    imgUrl: 'img/oblivion.jpg',
  },
  {
    title: 'Black darknes film oscars movie',
    price: 18100,
    imgUrl: 'img/war.jpg',
  },
];

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
          {arr.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imgUrl={obj.imgUrl}
              onFavorite={() => console.log('Added to bookmark')}
              onPlus={() => console.log('Pressed Plus')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
