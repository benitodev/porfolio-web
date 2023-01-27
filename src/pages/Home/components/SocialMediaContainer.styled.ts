import styled from 'styled-components';
import { devices } from '../../../utility/responsive';

type ContainerType = {
  flexDirect?: string;
};

export const Container = styled.div<ContainerType>`
  display: flex;
  row-gap: 1rem;
  flex-direction: ${(props) => props.flexDirect ?? 'column'};
  justify-content: center;
  align-items: self-start;
  @media ${devices.laptop} {
    row-gap: 1.4rem;
  }
`;

export const Link = styled.a`
  width: 30px;
  height: 30px;
  @media ${devices.tabletS} {
    width: 35px;
    height: 35px;
  }
  @media ${devices.tablet} {
    width: 40px;
    height: 40px;
  }
`;
