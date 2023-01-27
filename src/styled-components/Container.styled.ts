import styled from 'styled-components';
import { devices } from '../utility/responsive';

export interface ContainerProps {
  alignItems?: string;
  margin?: string;
}

export const Container = styled.section<ContainerProps>`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  /* column-gap: 1.25rem; */
  margin-top: 4rem;

  align-items: ${(props) => props.alignItems ?? 'center'};
  margin: ${(props) => props.margin ?? '0'};
`;

export const HomeContainer = styled(Container)`
  grid-template-columns: 0.5fr 3fr;
  position: relative;
  padding-top: 1.8rem;
  align-items: center;
  @media ${devices.tablet} {
    grid-template-columns: 50px 340px 1fr;
  }

  @media (min-width: 960px) {
    grid-template-columns: 70px 390px 1fr;
  }
`;
