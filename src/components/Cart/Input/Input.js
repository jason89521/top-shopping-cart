import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateCntById, incrementById, decrementById } from '../../../slices/cartSlice';
import { Box, Button } from './Input.style';

const Input = ({ product }) => {
  const [value, setValue] = useState(product.cnt);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateCntById(product.id, value));
  }, [value, product.id, dispatch]);

  useEffect(() => {
    setValue(product.cnt);
  }, [product.cnt]);

  const onChange = e => {
    // To extract leading zeros
    setValue(parseInt(e.target.value || 0, 10).toString(10));
  };

  return (
    <Box>
      <Button onClick={() => dispatch(incrementById(product.id))}>+</Button>
      <input type="number" value={value} onChange={onChange} />
      <Button onClick={() => dispatch(decrementById(product.id))}>-</Button>
    </Box>
  );
};

export default Input;
