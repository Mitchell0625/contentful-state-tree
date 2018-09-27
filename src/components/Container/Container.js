import React from 'react';
import Image from '../Image/Image';
import './Container.css';

const Container = ({ name, photo }) => {
  return (
    <div className="container-div">
      {/* <Letter /> */}
      <div className="container-Image">
        <Image image={photo} title={name} />
      </div>
    </div>
  );
};

export default Container;
