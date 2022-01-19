import React from 'react';
import { useSelector } from 'react-redux';

import { getAllFromCart } from '../../../slices/cartSlice';
import { Div, Circle } from './Icon.style';

const Icon = () => {
  const cart = useSelector(state => state.cart);
  const products = getAllFromCart(cart);
  const totalAmount = products.reduce((total, product) => total + product.cnt, 0);

  return (
    <Div>
      <Circle>{totalAmount}</Circle>
    </Div>
  );
};

export default Icon;
