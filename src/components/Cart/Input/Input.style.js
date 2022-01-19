import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  gap: 1rem;

  input {
    text-align: center;
    max-width: 100%;
    width: 3rem;
    font-size: 1.2rem;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      appearance: none;
    }
  }

  &::before {
    content: '+';
  }

  &::after {
    content: '-';
  }

  &::before,
  &::after {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: white;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: rgba(80, 184, 231, 1);
  }
`;
