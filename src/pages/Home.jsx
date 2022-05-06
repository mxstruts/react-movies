import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { MdOutlineCancel } from 'react-icons/md';
import Card from '../components/Card';

function Home(
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onLiked,
  onAddToCart,
  isLoading,
) {
  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onLiked(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };

  return (
    <div className="content p-40">
      {/* <div className="d-flex align-center justify-between mb-40">
        <h1>{searchValue ? `Searching: "${searchValue}"` : 'Movies'}</h1>
        <div className="search-block">
          <BiSearch className="bisearch1" />
          {searchValue && (
            <MdOutlineCancel
              onClick={() => setSearchValue('')}
              className="clear cu-p"
              alt="Clear"
            />
          )}
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..." />
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {items
          .filter((item) => item.title.toLowerCase().includes(searchValue))
          .map((item, index) => (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              imgUrl={item.imgUrl}
              onFavorite={(obj) => onLiked(obj)}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
      </div> */}
      lol
    </div>
  );
}

export default Home;
