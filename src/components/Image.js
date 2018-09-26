import React from 'react';

const Image = ({ title, url }) => {
  return (
    <div>
      <img src={url} />
      <h2>{title}</h2>
    </div>
  );
};

export default Image;
