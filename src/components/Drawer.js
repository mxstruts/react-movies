import { MdOutlineCancel } from 'react-icons/md';
import { BiRightArrowAlt } from 'react-icons/bi';
import { MdCancelPresentation } from 'react-icons/md';

function Drawer() {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30 align-center">
          Cart <MdCancelPresentation className="cu-p" size={28} />
        </h2>
        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <img className="mr-20" width={70} height={70} src="img/tintin.jpg" alt="Cherk" />
            <div className="mr-20">
              <p className="mb-5">Movie About Love and Nature Cartoon</p>
              <b>12 999 usd.</b>
            </div>
            <MdOutlineCancel className="removeBtn" size={28} />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <img className="mr-20" width={70} height={70} src="img/tintin.jpg" alt="Cherk" />
            <div className="mr-20">
              <p className="mb-5">Movie About Love and Nature Cartoon</p>
              <b>12 999 usd.</b>
            </div>
            <MdOutlineCancel className="removeBtn" size={28} />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <img className="mr-20" width={70} height={70} src="img/oblivion.jpg" alt="Cherk" />
            <div className="mr-20">
              <p className="mb-5">Movie About Love and Nature Cartoon</p>
              <b>12 999 usd.</b>
            </div>
            <MdOutlineCancel className="removeBtn" size={28} />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <img className="mr-20" width={70} height={70} src="img/oblivion.jpg" alt="Cherk" />
            <div className="mr-20">
              <p className="mb-5">Movie About Love and Nature Cartoon</p>
              <b>12 999 usd.</b>
            </div>
            <MdOutlineCancel className="removeBtn" size={28} />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <img className="mr-20" width={70} height={70} src="img/oblivion.jpg" alt="Cherk" />
            <div className="mr-20">
              <p className="mb-5">Movie About Love and Nature Cartoon</p>
              <b>12 999 usd.</b>
            </div>
            <MdOutlineCancel className="removeBtn" size={28} />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <img className="mr-20" width={70} height={70} src="img/oblivion.jpg" alt="Cherk" />
            <div className="mr-20">
              <p className="mb-5">Movie About Love and Nature Cartoon</p>
              <b>12 999 usd.</b>
            </div>
            <MdOutlineCancel className="removeBtn" size={28} />
          </div>
          <div className="cartTotalBlock">
            <ul>
              <li className="d-flex">
                <span>Total: </span>
                <div></div>
                <b>12 999 usd.</b>
              </li>
              <li className="d-flex">
                <span>Fee: 5% </span>
                <div></div>
                <b>1 328 usd.</b>
              </li>
            </ul>
            <button className="greenButton d-flex align-center justify-center">
              Make a purchase <BiRightArrowAlt className="righArrow" size={28} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
