import { MdOutlineCancel } from 'react-icons/md';
import { BiRightArrowAlt } from 'react-icons/bi';
import { MdCancelPresentation } from 'react-icons/md';

function Drawer({ onClose, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30 align-center">
          Cart <MdCancelPresentation className="cu-p" size={28} onClick={onClose} />
        </h2>
        <div className="items">
          {items.map((obj) => (
            <div className="cartItem d-flex align-center mb-20">
              <div className="cartItemImg" style={{ backgroundImage: `url(${obj.imgUrl})` }}></div>

              <div className="mr-20 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price} usd.</b>
              </div>
              <MdOutlineCancel className="removeBtn" size={28} />
            </div>
          ))}
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
  );
}

export default Drawer;
