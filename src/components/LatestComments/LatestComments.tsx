import React, { useMemo } from 'react';
import { List } from 'react-virtualized';
import CommentCard from '../CommentCard/CommentCard';
import Feedback from '../../types/Feedback';

interface Props {
  feedbackList: Array<Feedback>;
}

const LatestComments = (props: Props) => {
  const { feedbackList } = props;

  const sortedByLatestFeedbackList = useMemo((): Array<Feedback> => {
    return feedbackList.sort(
      (feedbackItemA: Feedback, feedbackItemB: Feedback) => {
        let dateA = +new Date(feedbackItemA.date);
        let dateB = +new Date(feedbackItemB.date);
        return dateB - dateA;
      }
    );
  }, [feedbackList]);

  return (
    <>
      {sortedByLatestFeedbackList.length && (
        <>
          <ul className='comment-list'>
            <List
              height={200}
              width={320}
              rowHeight={100}
              rowCount={sortedByLatestFeedbackList.length}
              rowRenderer={({ key, index, style }) => {
                const feedbackItem = sortedByLatestFeedbackList[index];
                return (
                  <li key={key} style={style}>
                    <CommentCard feedbackItem={feedbackItem} />
                  </li>
                );
              }}
            />
          </ul>
        </>
      )}
    </>
  );
};

export default LatestComments;
