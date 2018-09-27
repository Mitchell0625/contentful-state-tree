import React from 'react';
import './Image.css';

const Image = ({ title, image }) => {
  return (
    <div className="image-container">
      <img className="image-img" src={image} alt="image from contentful" />
      <h2>{title}</h2>
    </div>
  );
};

export default Image;
