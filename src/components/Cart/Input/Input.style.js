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
`;

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: none;
  outline: none;
  background-color: rgba(80, 184, 231, 1);
  transition: all .2s;

  &:hover {
    transform: scale(1.1);
  }
`;
