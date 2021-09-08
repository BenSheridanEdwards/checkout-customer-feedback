import React from 'react';
import { render } from '@testing-library/react';
import CommentCard from './CommentCard';

describe('CommentCard component', () => {
  const createWrapper = (extraProps: any = {}) => {
    const item = {
      comment: 'This is a comment!',
      email: 'bensheridanedwards@gmail.com',
      name: 'Ben',
      rating: 5,
    };
    return render(<CommentCard feedbackItem={item} {...extraProps} />);
  };

  it("should render the feedback author's name", () => {
    const wrapper = createWrapper();
    expect(wrapper.getByText('Ben')).toBeInTheDocument();
  });

  it('should render the feedback comment', () => {
    const wrapper = createWrapper();
    expect(wrapper.getByText('This is a comment!')).toBeInTheDocument();
  });
});
