import React from 'react';
import { useSelector } from 'react-redux';

import { Div, Circle } from './Icon.style';

const Icon = () => {
  const totalInCart = useSelector(state => state.cart.total);
  console.log(totalInCart);

  return (
    <Div>
      <Circle>{totalInCart}</Circle>
    </Div>
  );
};

export default Icon;
