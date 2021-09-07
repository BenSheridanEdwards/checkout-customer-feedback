import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import AverageRatingChart from '../AverageRatingChart/AverageRatingChart';
import LatestComments from '../LatestComments/LatestComments';
import Feedback from '../../types/Feedback';

const CustomerReview = () => {
  const [feedbackList, setFeedbackList] = useState<Array<Feedback>>([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      const response = await axios.get('http://localhost:3002/feedback');
      setFeedbackList(response.data);
    };

    fetchFeedback();
  }, []);

  const ratingList = feedbackList.map((feedback: Feedback): number => {
    return feedback.rating;
  });

  return (
    <section className='customer-review'>
      <h1 className='customer-review__header'>Product Feedback</h1>
      <h2 className='customer-review__sub-header'>
        What did you think of the product?
      </h2>
      <div className='customer-review__container'>
        <FeedbackForm />
        {feedbackList.length && (
          <article className='review-info'>
            <AverageRatingChart ratingList={ratingList} />
            <LatestComments feedbackList={feedbackList} />
          </article>
        )}
      </div>
    </section>
  );
};

export default CustomerReview;
