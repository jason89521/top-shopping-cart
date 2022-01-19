import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getAllFromCart, removeById } from '../../slices/cartSlice';
import { Box, List, ListItem, PayButton, TotalAmount } from './Cart.style';
import deleteIcon from '../../images/delete.png';
import Input from './Input';
import backArrow from '../../images/back_arrow.png';

const roundTo2 = num => Math.round(num * 100) / 100;

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const prodcuts = getAllFromCart(cart);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getTotalAmount = () => {
    return prodcuts.reduce((totalAmount, product) => {
      return roundTo2(totalAmount + product.price * product.cnt);
    }, 0);
  };

  const renderListItem = () => {
    return prodcuts.map(product => {
      return (
        <ListItem key={product.id}>
          <img src={product.image} alt={product.title} />
          <span className="title">{product.title}</span>
          <div>
            <span className="price">${roundTo2(product.price * product.cnt)}</span>
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
        <TotalAmount>Total: ${getTotalAmount()}</TotalAmount>
        <PayButton disabled={prodcuts.length === 0}>pay now</PayButton>
      </List>
    </Box>
  );
};

export default Cart;
