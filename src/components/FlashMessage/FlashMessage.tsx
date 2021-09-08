import React from 'react';

interface Props {
  status: string;
  message: string;
}

const FlashMessage = (props: Props) => {
  const { status, message } = props;
  return (
    <div className={`flash-message ${status}`}>
      <p>{message}</p>
    </div>
  );
};

export default FlashMessage;
