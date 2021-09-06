import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import RatingChart from '../RatingChart/RatingChart';
import LatestComments from '../LatestComments/LatestComments';

const CustomerReview = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      const response = await axios.get('http://localhost:3002/feedback');
      setFeedback(response.data);
    };

    fetchFeedback();
  }, []);

  return (
    <section className='customer-review'>
      <h1 className='customer-review__header'>Payment Feedback</h1>
      <h2 className='customer-review__sub-header'>
        How was your payment experience today?
      </h2>
      <div className='customer-review__container'>
        <FeedbackForm />
        {feedback.length && (
          <article className='review-info'>
            <RatingChart feedbackList={feedback} />
            <LatestComments feedbackList={feedback} />
          </article>
        )}
      </div>
    </section>
  );
};

export default CustomerReview;
