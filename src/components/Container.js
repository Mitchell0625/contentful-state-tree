import React from 'react';
// import { observer } from 'mobx-react';
import Image from './Image';

const Container = ({ name, photo }) => {
  return (
    <div>
      {/* <Letter /> */}
      <Image image={photo} title={name} />
    </div>
  );
};

export default Container;
