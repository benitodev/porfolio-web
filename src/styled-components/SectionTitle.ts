import styled from 'styled-components';
import { devices } from '../utility/responsive';

export const Title = styled.span`
  font-size: calc(var(--font-size) - var(--font-size-reduce));
  color: white;
  text-align: left;
  font-weight: 700;
  /* @media (min-width: 420px) {
    :root {
      --font-size: 6vw;
    }
  }  */
`;
