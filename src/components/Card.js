import { AiOutlineHeart } from 'react-icons/ai';

function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <AiOutlineHeart className="heart" />
      </div>

      <img width={133} height={112} src="img/tintin.jpg" alt="Cherk" />
      <h5>Movie About Love and Nature Cartoon</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>12 999 usd.</b>
        </div>
        <button className="button">
          <img className="cartItemImg" width={11} height={11} src="/img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;
