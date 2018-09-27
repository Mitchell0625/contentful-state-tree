import React from 'react';

const Image = ({ title, image }) => {
  return (
    <div>
      <img src={image} />
      <h2>{title}</h2>
    </div>
  );
};

export default Image;
