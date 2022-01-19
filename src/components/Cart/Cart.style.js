import styled from 'styled-components';

export const Box = styled.div`
  position: relative;

  & > button {
    position: absolute;
  }
`;

export const List = styled.ul`
  list-style: none;
  width: 70%;
  min-width: 50rem;
  margin: 0 auto;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  img:first-child {
    width: 9rem;
    height: 12rem;
  }

  img:last-child {
    width: 2rem;
    height: 2rem;
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
