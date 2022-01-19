import React from 'react';
import { useSelector } from 'react-redux';

import { Div, Circle } from './Icon.style';

const Icon = () => {
  const totalProducts = useSelector(state => state.cart.totalProducts);

  return (
    <Div>
      <Circle>{totalProducts}</Circle>
    </Div>
  );
};

export default Icon;
