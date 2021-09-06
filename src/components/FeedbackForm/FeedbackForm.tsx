import React from 'react';
import StarRating from '../StarRating/StarRating';

const FeedbackForm = () => {
  return (
    <form className='feedback-form'>
      <label className='feedback-form__label' htmlFor='name'>
        Name
      </label>
      <input
        className='feedback-form__input'
        id='name'
        type='name'
        name='Name'
        required
      />
      <label className='feedback-form__label' htmlFor='email'>
        Email
      </label>
      <input
        className='feedback-form__input'
        name='Email'
        id='email'
        type='email'
        required
      />
      <label className='feedback-form__label'>Rating</label>
      <StarRating currentRating={3} isInput={true} />
      <label className='feedback-form__label' htmlFor='comment'>
        Comment
      </label>
      <textarea
        className='feedback-form__input'
        rows={5}
        name='Comment'
        id='comment'
        required
      />
      <button className='btn feedback-form__button' type='submit'>
        Submit
      </button>
    </form>
  );
};

export default FeedbackForm;
