import styled from 'styled-components';
import { devices } from '../../utility/responsive';

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  justify-content: flex-end;
  column-gap: 2rem;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: rgb(33 33 35/0.2);
  border-color: #282b3c79;
  @media ${devices.laptop} {
  } ;
`;

export const List = styled.ul`
  display: none;
  @media ${devices.laptop} {
    display: flex;
    column-gap: 2.5rem;
    margin-right: 1rem;
  }
`;
export const Span = styled.span`
  font-size: 1.3rem;

  color: #fff;
`;

export const Wrapper = styled.div`
  order: 1;
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  width: 28px;
  @media (min-width: 600px) {
    width: 32px;
  }
  @media ${devices.laptop} {
    display: none;
  }
`;
