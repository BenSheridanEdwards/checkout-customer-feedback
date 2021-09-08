import React from 'react';
import { FaStar } from 'react-icons/fa';

interface Props {
  value: string;
  currentRating: number;
  isInput: boolean;
  handleInputChange?: React.ChangeEventHandler<HTMLInputElement>;
  handleHover: Function;
  hoverValue: any;
}

const Star = (props: Props) => {
  const {
    value,
    currentRating,
    isInput,
    handleInputChange,
    handleHover,
    hoverValue,
  } = props;

  return (
    <label className='star-rating__input'>
      {isInput && handleHover && (
        <input
          type='radio'
          name='rating'
          value={value}
          onChange={handleInputChange}
          data-testid={`star-${value}`}
        />
      )}
      <FaStar
        className='star-icon'
        color={
          parseInt(value) <= (parseInt(hoverValue) || currentRating)
            ? '#FCD34D'
            : '#9CA3AF'
        }
        onMouseEnter={() => handleHover(value)}
        onMouseLeave={() => handleHover(null)}
        aria-label={`Rate product ${value} out of 5 stars`}
      />
    </label>
  );
};

export default Star;
