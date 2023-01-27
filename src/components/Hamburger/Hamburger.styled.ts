import styled from 'styled-components';
import { devices } from '../../utility/responsive';

type ContainerProps = {
  open: boolean;
};

export const Container = styled.div`
  position: fixed;
  top: calc(1rem + 40px);
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(7 7 12 / 96%);
`;
export const List = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 3.4rem;
  justify-content: center;
  padding: 0;
`;
export const Item = styled.a`
  color: rgb(180 17 111);
  font-size: 1.8rem;
  font-weight: 600;
  @media ${devices.laptop} {
    font-size: 1.5rem;
  }
`;
