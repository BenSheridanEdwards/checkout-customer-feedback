import React, { useState } from 'react';
import Star from '../Star/Star';

interface Props {
  currentRating: number;
  isInput: boolean;
  handleInputChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const StarRating = (props: Props) => {
  const { currentRating, isInput, handleInputChange } = props;

  const [hoverValue, setHoverValue] = useState<null | number>(null);

  const handleHover = (value: number) => {
    if (isInput) setHoverValue(value);
  };

  return (
    <div className='star-rating'>
      {[...Array(5)].map((star, i) => {
        const starValue = i + 1;
        return (
          <Star
            key={starValue}
            value={`${starValue}`}
            currentRating={currentRating}
            isInput={isInput}
            handleInputChange={handleInputChange}
            handleHover={handleHover}
            hoverValue={hoverValue}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
