import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import axios from 'axios';
import CssBaseline from '@mui/material/CssBaseline';

import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [liked, setLiked] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://6255054089f28cf72b63ae48.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://6255054089f28cf72b63ae48.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
    axios.get('https://6255054089f28cf72b63ae48.mockapi.io/Favorites').then((res) => {
      setLiked(res.data);
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

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onLiked = (obj) => {
    axios.post('https://6255054089f28cf72b63ae48.mockapi.io/Favorites', obj);
    setLiked((prev) => [...prev, obj]);
  };

  return (
    <div className="wrapper clear">
      <CssBaseline />
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />
      )}

      <Header onClickCart={() => setCartOpened(true)} />

      <Route path="/" exact>
        <Home
          items={items}
          cartItems={cartItems}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onLiked={onLiked}
          onAddToCart={onAddToCart}
        />
      </Route>

      <Route path="/favorites" exact>
        <Favorites items={liked} />
      </Route>
    </div>
  );
}

export default App;
