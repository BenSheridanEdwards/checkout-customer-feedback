import React from 'react';
import { render } from '@testing-library/react';
import Star from './Star';
import userEvent from '@testing-library/user-event';

describe('Star component', () => {
  const mockHandleInputChange = jest.fn();
  const createWrapper = (extraProps: any = {}) => {
    return render(
      <Star
        value={'3'}
        currentRating={1}
        isInput={true}
        handleInputChange={mockHandleInputChange}
        handleHover={jest.fn()}
        hoverValue={null}
        {...extraProps}
      />
    );
  };

  it('should render the radio button when the star is an input', () => {
    const wrapper = createWrapper({ isInput: true });
    expect(wrapper.getByRole('radio')).toBeInTheDocument();
  });

  it('should not render the radio button when the star is not an input', () => {
    const wrapper = createWrapper({ isInput: false });
    expect(wrapper.queryByRole('radio')).not.toBeInTheDocument();
  });

  it('should call the handle the input change when the star is clicked', () => {
    const wrapper = createWrapper();
    userEvent.click(wrapper.getByRole('radio'));
    expect(mockHandleInputChange).toHaveBeenCalled();
  });
});
