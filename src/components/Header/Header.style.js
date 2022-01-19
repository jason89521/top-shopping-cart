import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;

  background-image: linear-gradient(
    to right bottom,
    rgba(80, 184, 231, 1),
    rgba(80, 184, 231, 0.75)
  );

  font-family: 'Inconsolata', monospace;

  & > div:last-child {
    display: flex;
    gap: 2rem;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

export const BrandLink = styled(Link)`
  font-size: 3rem;
  font-weight: 700;
`;

export const OtherLink = styled(Link)`
  font-size: 2rem;
`