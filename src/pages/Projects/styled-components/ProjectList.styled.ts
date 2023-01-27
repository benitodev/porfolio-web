import styled from 'styled-components';
import { devices } from '../../../utility/responsive';

export interface BorderRadiusType {
  deployed?: string;
}

export const CardContainer = styled.div`
  width: 100%;
  max-width: 330px;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  align-items: center;
  position: relative;
  text-align: center;
  background-color: #2d2d2d;
  /* box-shadow: 0px 2px 8px 0px gray; */

  transition: all 0.3s ease;
  cursor: pointer;
  @media (min-width: 560px) {
    display: flex;
    max-width: 500px;
  }
  @media ${devices.tablet} {
    max-width: 560px;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  flex-wrap: wrap;
  row-gap: 2rem;
  justify-items: center;
  @media (min-width: 1064px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    row-gap: 6rem;
  } ;
`;

export const IconsContainer = styled.div`
  display: none;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  & > * {
    height: 15vh;
    width: 15vw;
    max-height: 4rem;
    max-width: 4rem;
    top: 0;
    left: 0;
  }
`;
export const DarkenedBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #2d2d2d4d;
  &:hover .IconContainer {
    display: flex;
    background-color: #00000087;
  }
`;

export const ImgContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 290px;
  position: relative;
  & img {
    overflow: hidden;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Content = styled.div`
  display: flex;
  padding: 1rem;
  text-align: left;
  width: 100%;
  row-gap: 0.7rem;
  position: relative;
  flex-direction: column;
`;

export const Title = styled.h4`
  margin-top: 0.5rem;
  font-size: 1.3rem;
  color: #bfbfbf;

  @media ${devices.tabletS} {
    font-size: 1.5rem;
  }

  @media ${devices.tablet} {
    font-size: 1.6rem;
  }
`;

export const Stack = styled.span`
  color: var(--gray-color-text);
  font-size: 1rem;
  @media ${devices.tabletS} {
    font-size: 1.4rem;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin: 0.9rem 0;
  font-size: 0.9rem;
`;

export const Tag = styled.span`
  padding: 0.4rem;
  border: 2px solid var(--second-color);
  background-color: var(--second-color);
  border-radius: 4px;
  color: var(--main-color);
  font-weight: bold;
  @media ${devices.tablet} {
    font-size: 1.1rem;
  }
`;
export const BorderRadius = styled.div<BorderRadiusType>`
 pointer-events: ${(props) => (!!props.deployed ? 'auto' : 'none')} }
  overflow: hidden;
  background-color: rgb(15 16 24);
  border-radius: 50%;
  padding: 0.65rem;
  width: var(--icon-hover-sm);
  height: var(--icon-hover-sm);
`;
