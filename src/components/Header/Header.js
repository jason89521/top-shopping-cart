import React from 'react';
import { Link } from 'react-router-dom';

import { StyledHeader, BrandLink, OtherLink } from './Header.style';
import Icon from './Icon';

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
          <Link to="/cart">
            <Icon />
          </Link>
        </div>
      </StyledHeader>
    </React.Fragment>
  );
};

export default Header;
