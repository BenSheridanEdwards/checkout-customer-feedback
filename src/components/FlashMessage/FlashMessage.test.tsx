import React from 'react';
import { render } from '@testing-library/react';
import FlashMessage from './FlashMessage';

describe('FlashMessage component', () => {
  const createWrapper = (extraProps: any = {}) => {
    return render(
      <FlashMessage
        status={'success'}
        message={'This is a success message'}
        {...extraProps}
      />
    );
  };

  it('should render the flash message text', () => {
    const wrapper = createWrapper();
    expect(wrapper.getByText('This is a success message')).toBeInTheDocument();
  });

  it('should include the status in the className to determine styling', () => {
    const wrapper = createWrapper();
    expect(
      wrapper.getByText('This is a success message').closest('div')
    ).toHaveClass('success');
  });
});
