import React from 'react';
import { StyledHeader, BrandLink, OtherLink } from './Header.style';

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
        </div>
      </StyledHeader>
    </React.Fragment>
  );
};

export default Header;
