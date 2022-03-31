import { BiCartAlt } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';

function Header() {
  return (
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
          <span>12 999 usd.</span>
        </li>
        <li>
          <CgProfile className="Img" width={18} height={18} />
        </li>
      </ul>
    </header>
  );
}

export default Header;
