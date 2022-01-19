import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Spinner from '../Spinner';

export const Box = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 5rem;
  padding: 2.5rem 2rem;
`;

export const Sidebar = styled.aside`
  border: 2px solid rgba(80, 184, 231, 1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  flex-basis: 22.5rem;
  gap: 1rem;
  padding: 2.5rem;
`;

export const SidebarLink = styled(Link)`
  border-radius: 10px;
  color: #696969;
  font-size: 1.25rem;
  text-transform: capitalize;
  padding: 1rem 2rem;

  &:hover {
    background-color: rgba(255, 250, 225, 0.5);
  }

  &.active {
    background-color: rgba(255, 250, 225, 1);
  }
`;

export const Main = styled.main`
  flex-grow: 1;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  list-style: none;
`;

export const ListItem = styled.li`
  border: 3px solid rgba(230, 225, 200, 1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-direction: column;
  flex: 1;
  padding: 1rem 2rem;

  img {
    width: 9rem;
    height: 12rem;
  }

  h1 {
    font-size: 1.25rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  button {
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 25px;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    background-color: rgba(80, 184, 231, 0.75);
    padding: 0.5rem 1rem;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    &:active {
      transform: translateY(-2px);
    }
  }
`;

export const Loader = styled(Spinner)`
  width: 5rem;
  height: 5rem;
  margin: 0 auto;
`;
