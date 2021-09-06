import React from 'react';
import CommentCard from '../CommentCard/CommentCard';
import Comment from '../../types/Comment';

interface Props {
  feedbackList: Array<Comment>;
}

const LatestComments = (props: Props) => {
  const { feedbackList } = props;
  return (
    <>
      {feedbackList.length && (
        <ul className='comment-list'>
          {feedbackList.map((feedbackItem) => {
            return (
              <li className='comment-list__item' key={feedbackItem.id}>
                <CommentCard feedbackItem={feedbackItem} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default LatestComments;
