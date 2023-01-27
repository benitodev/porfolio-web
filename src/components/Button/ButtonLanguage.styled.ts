import styled from 'styled-components';
import { devices } from '../../utility/responsive';

export const Container = styled.div`
  display: flex;
  @media ${devices.tablet} {
  }
`;

export const Select = styled.div``;
export const Option = styled.option`
  display: inline;
  top: 0;
  left: 0;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  position: relative;
  color: #fff;
`;

export const Button = styled.button`
  display: inline;
  top: 0;
  left: 0;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  position: relative;
  color: #fff;
`;
