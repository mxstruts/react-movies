import React from 'react';
import styles from './Card.module.scss';
import { AiOutlineHeart } from 'react-icons/ai'; //pustoe serdce
import { AiFillHeart } from 'react-icons/ai';
import { BiMessageSquareAdd } from 'react-icons/bi'; //dobavit v korzinu
import { BiMessageSquareCheck } from 'react-icons/bi'; //dobavleny v korzinu

function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };

  const onClickLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={props.onFavorite}>
        {isLiked ? (
          <AiFillHeart className="heart" onClick={onClickLike} />
        ) : (
          <AiOutlineHeart className="heart" onClick={onClickLike} />
        )}
      </div>

      <img width={133} height={112} src={props.imgUrl} alt="Cherk" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>{props.price}</b>
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
