import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardBox = styled.div`
  perspective: 1500px;
  position: relative;

  & > div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    backface-visibility: hidden;
    transition: all 0.8s ease;

    &:last-child {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;

      background-color: rgba(80, 184, 231, 1);
      border-radius: 2.5rem;
      
      transform: rotateY(180deg);
    }
  }

  &:hover {
    & > div:first-child {
      transform: rotateY(-180deg);
    }
    & > div:last-child {
      transform: rotateY(0deg);
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;

  color: white;
`

export const StyledLink = styled(Link)`
  background-color: white;

  color: #323232;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;

  border-radius: 10rem;
  padding: 1rem 2rem;

  transition: all .3s;

  &:hover {
    transform: translateY(-5px);
  }

  &:active {
    transform: translateY(-2px);
  }
`