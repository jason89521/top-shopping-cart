import React from 'react';
import { StyledHeader, BrandLink, OtherLink } from './Header.style';
import shoppingCart from '../../shopping_cart.png';

const Header = () => {
  return (
    <React.Fragment>
      <StyledHeader>
        <div>
          <BrandLink to="/">Fake Store</BrandLink>
        </div>
        <div>
          <OtherLink to="/products">Products</OtherLink>
          <OtherLink to="/contact">Contact</OtherLink>
          <img src={shoppingCart} alt="Shopping cart icon" />
        </div>
      </StyledHeader>
    </React.Fragment>
  );
};

export default Header;
