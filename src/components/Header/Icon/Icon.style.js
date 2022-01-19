import styled from 'styled-components';

import shoppingCart from '../../../shopping_cart.png';

export const Div = styled.div`
  position: relative;
  width: 3rem;
  height: 3rem;
  background-image: url(${shoppingCart});
  background-size: 100% 100%;
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  background-color: rgb(255, 75, 75);
  border-radius: 50%;
  overflow: hidden;
`
