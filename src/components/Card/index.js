import React from 'react';
import styles from './Card.module.scss';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'; //pustoe serdce
import { BiMessageSquareCheck, BiMessageSquareAdd } from 'react-icons/bi'; //dobavleny v korzinu  //dobavit v korzinu

function Card({ onFavorite, onPlus, onMinus, props, title, imgUrl, price }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ title, imgUrl, price });
    setIsAdded(!isAdded);
  };

  const onClickLike = () => {
    onFavorite({ title, imgUrl, price });
    setIsLiked(!isLiked);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        {isLiked ? (
          <AiFillHeart className="heart" onClick={onClickLike} />
        ) : (
          <AiOutlineHeart className="heart" onClick={onClickLike} />
        )}
      </div>

      <img width={133} height={112} src={imgUrl} alt="movie-cover" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>{price}</b>
        </div>
        {isAdded ? (
          <BiMessageSquareCheck className={styles.plus} onClick={onClickPlus} size={28} />
        ) : (
          <BiMessageSquareAdd className={styles.plus} onClick={onClickPlus} size={28} />
        )}
      </div>
    </div>
  );
}

export default Card;
