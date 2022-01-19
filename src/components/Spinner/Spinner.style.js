import styled, {keyframes} from 'styled-components';

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Rotate = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;

  border: 0.75rem solid #a0a0a0;
  border-top: 0.75rem solid rgba(80, 184, 231, 1);

  animation-name: ${rotateAnimation} ;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`