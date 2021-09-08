import React from 'react';
import { render, waitFor } from '@testing-library/react';
import CustomerReview from './CustomerReview';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('CustomerReview component', () => {
  const axiosMock = new MockAdapter(axios);

  axiosMock.onGet('http://localhost:3002/feedback').reply(200, {
    feedback: [
      {
        id: 1,
        name: 'John Smith',
        rating: 5,
        comment: 'This is my comment',
        email: 'bensheridanedwards@gmail.com',
      },
    ],
  });

  const createWrapper = (extraProps: any = {}) => {
    return render(<CustomerReview {...extraProps} />);
  };

  it('should render the header', async () => {
    let wrapper = createWrapper();

    await waitFor(() =>
      expect(wrapper.getByText('Product feedback')).toBeInTheDocument()
    );
  });

  it('should render the sub-header', async () => {
    const wrapper = createWrapper();

    await waitFor(() =>
      expect(
        wrapper.getByText('What did you think of the product?')
      ).toBeInTheDocument()
    );
  });
});
