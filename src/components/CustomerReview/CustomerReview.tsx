import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import AverageRatingChart from '../AverageRatingChart/AverageRatingChart';
import LatestComments from '../LatestComments/LatestComments';
import Feedback from '../../types/Feedback';
import FormStatus from '../../types/FormStatus';
import FlashMessage from '../FlashMessage/FlashMessage';

const CustomerReview = () => {
  const [feedbackList, setFeedbackList] = useState<Array<Feedback>>([]);
  const [ratingList, setRatingList] = useState<Array<number>>([]);
  const [formStatus, setFormStatus] = useState<FormStatus>({
    status: 'none',
    message: '',
  });

  useEffect(() => {
    fetchFeedbackList();
  }, []);

  useEffect(() => {
    if (feedbackList.length) {
      const sortedRatingList = [...feedbackList]
        .sort((feedbackItemA: Feedback, feedbackItemB: Feedback) => {
          let dateA = +new Date(feedbackItemA.date);
          let dateB = +new Date(feedbackItemB.date);
          return dateA - dateB;
        })
        .map((feedback: Feedback) => {
          return feedback.rating;
        });

      setRatingList(sortedRatingList);
    }
  }, [feedbackList]);

  const fetchFeedbackList = async () => {
    try {
      const response = await axios.get('http://localhost:3002/feedback');
      setFeedbackList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFlashMessage = (statusAndMessage: FormStatus) => {
    setFormStatus(statusAndMessage);
    setTimeout(() => setFormStatus({ status: 'none', message: '' }), 5000);
  };

  return (
    <section className='customer-review'>
      <div className='customer-review__header'>
        <h1 className='customer-review__header-text'>Product feedback</h1>
        <h2 className='customer-review__sub-header-text'>
          What did you think of the product?
        </h2>
        {formStatus.status !== 'none' && (
          <FlashMessage
            status={formStatus.status}
            message={formStatus.message}
          />
        )}
      </div>
      <div className='customer-review__container'>
        <FeedbackForm
          handleFlashMessage={handleFlashMessage}
          fetchFeedbackList={fetchFeedbackList}
        />
        {feedbackList.length ? (
          <article className='review-info'>
            <AverageRatingChart ratingList={ratingList} />
            <LatestComments feedbackList={feedbackList} />
          </article>
        ) : null}
      </div>
    </section>
  );
};

export default CustomerReview;
