import React from 'react';
import { FaStar } from 'react-icons/fa';

interface Props {
  value: string;
  currentRating: number;
  isInput: boolean;
}

const Star = (props: Props) => {
  const { value, currentRating, isInput } = props;
  return (
    <label className='star-rating__input'>
      {isInput && <input type='radio' name='rating' value={value} />}
      <FaStar
        className='star-icon'
        color={currentRating >= parseInt(value) ? '#FCD34D' : '#E5E7EB'}
      />
    </label>
  );
};

export default Star;
