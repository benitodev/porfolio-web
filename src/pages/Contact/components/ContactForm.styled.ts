import styled from 'styled-components';
import { devices } from '../../../utility/responsive';

export const Form = styled.form`
  display: flex;
  row-gap: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${devices.tabletS} {
    margin-bottom: 1rem;
  }
`;
