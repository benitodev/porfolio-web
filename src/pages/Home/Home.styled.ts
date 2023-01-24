import styled from 'styled-components';
import { devices } from '../../utility/responsive';

export const Container = styled.section`
  min-height: 100vh;
  position: relative;
  top: 10vh;
`;

export const ImgContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  max-width: 390px;
  overflow: hidden;
  /* @media ${devices.laptop} {
    order: 2;
  } */
`;
export const Img = styled.img`
  width: 175px;
  height: 175px;
  border-radius: 50%;

  filter: grayscale(65%);
  object-fit: cover;
  @media ${devices.tabletS} {
    width: 200px;
    height: 200px;
  }

  @media ${devices.laptop} {
    width: 260px;
    height: 260px;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  @media ${devices.tabletS} {
    column-gap: 10vw;
  } ;
`;
