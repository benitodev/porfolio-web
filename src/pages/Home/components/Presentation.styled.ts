import styled from 'styled-components';
import { devices } from '../../../utility/responsive';

export const Container = styled.div`
  display: flex;
  height: 100%;
  grid-column: 1/3;
  flex-direction: column;
  align-items: center;
  text-align: left;
  @media ${devices.tablet} {
    grid-column: 3;
    padding-top: 4rem;
    justify-content: center;
  }
  @media ${devices.laptop} {
    margin-left: 2rem;
  }
`;
