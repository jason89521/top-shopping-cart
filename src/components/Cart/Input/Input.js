import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateCntById } from '../../../slices/cartSlice';
import { Box } from './Input.style';

const Input = ({ product }) => {
  const [value, setValue] = useState(product.cnt);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateCntById(product.id, value));
  }, [value, product.id, dispatch]);

  const onChange = e => {
    setValue(parseInt(e.target.value || 0, 10).toString(10));
  };

  return (
    <Box>
      <input type="number" value={value} onChange={onChange} />
    </Box>
  );
};

export default Input;
