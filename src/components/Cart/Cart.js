import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getAllFromCart, removeById } from '../../slices/cartSlice';
import { Box, List, ListItem, PayButton } from './Cart.style';
import deleteIcon from '../../images/delete.png';
import Input from './Input';
import backArrow from '../../images/back_arrow.png';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const prodcuts = getAllFromCart(cart);

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
          <img
            onClick={() => dispatch(removeById(product.id))}
            src={deleteIcon}
            alt="delete icon"
          />
        </ListItem>
      );
    });
  };

  return (
    <Box>
      <button onClick={() => navigate(-1)}>
        <img src={backArrow} alt="back" />
        <span>Back</span>
      </button>
      <List>
        {renderListItem()}
        <PayButton disabled={prodcuts.length === 0}>pay now</PayButton>
      </List>
    </Box>
  );
};

export default Cart;
