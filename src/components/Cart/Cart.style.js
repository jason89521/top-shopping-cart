import styled from 'styled-components';

export const Box = styled.div`
  position: relative;

  & > button {
    cursor: pointer;
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    display: flex;
    align-items: center;
    padding: 1rem;
    background-color: transparent;
    outline: none;
    border: none;
    border-radius: 10px;
    font-size: 1.5rem;
    transition: all 0.2s;
    backface-visibility: hidden;

    &:hover {
      background-color: rgba(255, 230, 215, 1);
      transform: translateY(-5px);
    }

    &:active {
      transform: translateY(-2px);
    }

    img {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  width: 70%;
  min-width: 50rem;
  margin: 0 auto;
  padding: 2rem 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2rem;

  img:first-child {
    width: 9rem;
    height: 12rem;
  }

  img:last-child {
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }

  span.title {
    flex: 1;
    font-size: 1.5rem;
  }

  span.price {
    font-size: 1.25rem;
    font-weight: 500;
  }

  & > div {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

export const PayButton = styled.button`
  cursor: pointer;
  display: block;
  border: none;
  border-radius: 10px;
  outline: none;
  background-color: rgba(80, 184, 231, 1);
  width: 10rem;
  margin: 0 auto;
  padding: 1rem;
  color: white;
  font-size: 1.2rem;
  text-transform: uppercase;
  transition: all 0.2s;
  backface-visibility: hidden;

  &:hover {
    transform: translateY(-5px);
  }

  &:active {
    transform: translateY(-2px);
  }

  &:disabled {
    cursor: not-allowed ;
    background-color: #a0a0a0;
    color: #707070;
    transform: translateY(0px);
  }
`;

export const TotalAmount = styled.span`
  font-family: 'Inconsolata', monospace;
  font-size: 2rem;
  display: block;
  text-align: center;
  margin-bottom: 3rem;
`