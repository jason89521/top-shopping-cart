import React from 'react';

import { CardBox, StyledLink as Link, Title } from './Card.style';

const Card = ({ id = 0, title = '', price = 0, category = '', image = '' }) => {
  return (
    <CardBox>
      <div>
        <img src={image} alt={title} />
      </div>
      <div>
        <Title>{category}</Title>
        <Link to={`/products/${category}`}>Shop Now!</Link>
      </div>
    </CardBox>
  );
};

export default Card;
