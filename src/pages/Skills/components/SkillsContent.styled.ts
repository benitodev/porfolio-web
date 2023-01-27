import styled from 'styled-components';
import { devices } from '../../../utility/responsive';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 6rem;
  margin-bottom: 2rem;
  @media ${devices.tabletS} {
    row-gap: 8rem;
  }
`;

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1.3rem;
  & > svg {
    width: 4rem;
    height: 4rem;
  }

  @media ${devices.tablet} {
    & > svg {
      width: 5rem;
      height: 5rem;
    }
  }
`;

export const Title = styled.h4`
  font-size: 1.4rem;
  font-weight: 600;
  color: #fff;

  @media ${devices.tabletS} {
    font-size: 1.8rem;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 500px;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
`;

export const Tag = styled.span`
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  font-weight: 600;
  color: #fff;
  background-color: #2d2d2d;
  @media ${devices.tabletS} {
    font-size: 1.3rem;
  }
  /* background-color: #743898; */
  /* background-color: #e77a10; */
`;
