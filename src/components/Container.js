import React from 'react';
import { observer } from 'mobx-react';
import Image from './Image';

const Container = ({ title, url }) => {
  return (
    <div>
      {/* <Letter /> */}
      <Image url={url} title={title} />
    </div>
  );
};

export default Container;
