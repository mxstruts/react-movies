import { MdOutlineCancel, MdCancelPresentation } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
import { BiRightArrowAlt } from 'react-icons/bi';
import { AiOutlineDropbox } from 'react-icons/ai';

function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30 align-center">
          Cart <IoClose className="cu-p" size={28} onClick={onClose} />
        </h2>

        {items.length > 0 ? (
          <div>
            <div className="items">
              {items.map((obj) => (
                <div className="cartItem d-flex align-center mb-20">
                  <div
                    className="cartItemImg"
                    style={{ backgroundImage: `url(${obj.imgUrl})` }}></div>

                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} usd.</b>
                  </div>
                  <MdOutlineCancel
                    className="removeBtn"
                    size={28}
                    onClick={() => onRemove(obj.id)}
                  />
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
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <AiOutlineDropbox className="mb-20" size={56} />
            <h2>Cart is clear</h2>
            <p className="opacity-6">Add atleast 1 item please</p>
            <button className="greenButton" onClick={onClose}>
              <BiRightArrowAlt className="emptyImg" size={28} />
              Return Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
