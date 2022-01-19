import styled from 'styled-components';

export const HomeBox = styled.div``;

export const Heading = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding-top: 2rem;
  padding-bottom: 4rem;
  padding-left: 10rem;
  padding-right: 10rem;

  color: rgba(80, 184, 231, 1);
  font-family: 'Inconsolata', monospace;

  *:first-child {
    font-size: 3rem;
  }

  *:not(:first-child) {
    font-size: 1.5rem;
  }
`;

export const CardsBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5rem;

  & > * {
    flex-basis: 15rem;
    height: 20rem;
  }
`;
