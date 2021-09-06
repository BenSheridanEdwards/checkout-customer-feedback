import React from 'react';
import StarRating from '../StarRating/StarRating';
import Comment from '../../types/Comment';

interface Props {
  feedbackItem: Comment;
}

const CommentCard = (props: Props) => {
  const { feedbackItem } = props;
  return (
    <div className='comment-card'>
      <div className='comment-card__header'>
        <h3>{feedbackItem.name}</h3>
        <StarRating currentRating={feedbackItem.rating} isInput={false} />
      </div>
      <p className='comment-card__text'>{feedbackItem.comment}</p>
    </div>
  );
};

export default CommentCard;
