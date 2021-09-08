import React, { useState } from 'react';
// Type for react-uuid library not found despite installing @types/react-uuid
// @ts-ignore
import uuid from 'react-uuid';
import StarRating from '../StarRating/StarRating';
import addFeedbackItem from '../../api/addFeedbackItem';

interface Props {
  handleFlashMessage: Function;
  fetchFeedbackList: Function;
}

const FeedbackForm = (props: Props) => {
  const { handleFlashMessage, fetchFeedbackList } = props;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
    rating: 0,
  });

  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const {
      target: { name, value },
    } = event;

    if (name === 'rating') {
      setFormData({
        ...formData,
        [name]: parseInt(value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const feedbackObject = {
      id: uuid(),
      date: new Date().toLocaleString(),
      ...formData,
    };

    addFeedbackItem(feedbackObject)
      .then((response) => {
        handleFlashMessage({
          status: 'success',
          message: 'Form successfully submitted',
        });
        fetchFeedbackList();
        setFormData({ name: '', email: '', comment: '', rating: 0 });
      })
      .catch((error) => {
        console.log(error);
        setFormData({ name: '', email: '', comment: '', rating: 0 });

        handleFlashMessage({
          status: 'failure',
          message:
            'Error in submitting feedback, please check your connection and try again',
        });
      });
  };

  return (
    <>
      <form className='feedback-form' onSubmit={handleFormSubmit}>
        <label className='feedback-form__label' htmlFor='name'>
          Name <span>*</span>
        </label>
        <input
          className='feedback-form__input'
          id='name'
          type='name'
          name='name'
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <label className='feedback-form__label' htmlFor='email'>
          Email <span>*</span>
        </label>
        <input
          className='feedback-form__input'
          name='email'
          id='email'
          type='email'
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <label className='feedback-form__label'>Rating</label>
        <StarRating
          currentRating={formData.rating}
          isInput={true}
          handleInputChange={handleInputChange}
        />
        <label className='feedback-form__label' htmlFor='comment'>
          Comment <span>*</span>
        </label>
        <textarea
          className='feedback-form__input'
          rows={5}
          name='comment'
          id='comment'
          value={formData.comment}
          onChange={handleInputChange}
          required
        />
        <button className='btn feedback-form__button' type='submit'>
          Submit
        </button>
      </form>
    </>
  );
};

export default FeedbackForm;
