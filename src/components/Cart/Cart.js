import React from 'react';
import { useSelector } from 'react-redux';

import { getAllFromCart } from '../../slices/cartSlice';
import { Box, List, ListItem } from './Cart.style';
import deleteIcon from '../../images/delete.png';
import Input from './Input';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const prodcuts = getAllFromCart(cart);

  const renderListItem = () => {
    return prodcuts.map(product => {
      return (
        <ListItem key={product.id}>
          <img src={product.image} alt={product.title} />
          <span className="title">{product.title}</span>
          <div>
            <span className="price">${product.price}</span>
            <Input product={product} />
          </div>
          <img src={deleteIcon} alt="delete icon" />
        </ListItem>
      );
    });
  };

  return (
    <Box>
      <button>&#8592;</button>
      <List>{renderListItem()}</List>
    </Box>
  );
};

export default Cart;
