import React from 'react';
import Star from '../Star/Star';

interface Props {
  currentRating: number;
  isInput: boolean;
}

const StarRating = (props: Props) => {
  const { currentRating, isInput } = props;

  return (
    <div className='star-rating'>
      <Star value='1' currentRating={currentRating} isInput={isInput} />
      <Star value='2' currentRating={currentRating} isInput={isInput} />
      <Star value='3' currentRating={currentRating} isInput={isInput} />
      <Star value='4' currentRating={currentRating} isInput={isInput} />
      <Star value='5' currentRating={currentRating} isInput={isInput} />
    </div>
  );
};

export default StarRating;
