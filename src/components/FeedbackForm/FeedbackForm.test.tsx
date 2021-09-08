import React from 'react';
import { render } from '@testing-library/react';
import FeedbackForm from './FeedbackForm';

describe('FeedbackForm component', () => {
  const createWrapper = (extraProps: any = {}) => {
    return render(<FeedbackForm {...extraProps} />);
  };

  it('should render the name input label', () => {
    const wrapper = createWrapper();
    expect(wrapper.getByLabelText('Name')).toBeInTheDocument();
  });

  it('should render the email input label', () => {
    const wrapper = createWrapper();
    expect(wrapper.getByLabelText('Email')).toBeInTheDocument();
  });

  it('should render the comment input label', () => {
    const wrapper = createWrapper();
    expect(wrapper.getByLabelText('Comment')).toBeInTheDocument();
  });

  it('should render the submit button', () => {
    const wrapper = createWrapper();
    expect(wrapper.getByText('Submit')).toBeInTheDocument();
  });
});
