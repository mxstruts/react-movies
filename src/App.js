import React from 'react';
import axios from 'axios';
import CssBaseline from '@mui/material/CssBaseline';
import { BiSearch } from 'react-icons/bi';
import { MdOutlineCancel } from 'react-icons/md';

import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://6255054089f28cf72b63ae48.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://6255054089f28cf72b63ae48.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://6255054089f28cf72b63ae48.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://6255054089f28cf72b63ae48.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSeachInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      <CssBaseline />
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
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
            <input onChange={onChangeSeachInput} value={searchValue} placeholder="Search..." />
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
                onFavorite={() => console.log('Added to bookmark')}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
