import React from 'react';
import { BiCartAlt } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="\img\logo.png" alt="lol" />
          <div>
            <h3 className="text-uppercase">React Store</h3>
            <p className="opacity-10">Best Smartphones Here</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <BiCartAlt className="Img" width={18} height={18} />
            <span>1200 usd.</span>
          </li>
          <li>
            <CgProfile className="Img" width={18} height={18} />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Movies</h1>
        <div className="d-flex">
          <div className="card">
            <img width={133} height={112} src="img/tintin.jpg" alt="Cherk" />
            <h5>Movie About Love and Nature Cartoon</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>12 999 usd.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="img/oblivion.jpg" alt="Cherk" />
            <h5>Movie About Love and Nature Cartoon</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>12 999 usd.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="img/war.jpg" alt="Cherk" />
            <h5>Movie About Love and Nature Cartoon</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>12 999 usd.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="img/jumanji.jpg" alt="Cherk" />
            <h5>Movie About Love and Nature Cartoon</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>12 999 usd.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
