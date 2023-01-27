import styled from 'styled-components';
import { devices } from '../../utility/responsive';

export const ButtonContainer = styled.button`
  position: relative;
  width: 135px;
  height: 60px;
  margin-top: 2rem;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  letter-spacing: 0.1rem;
  font-size: 1rem;
  font-weight: 400;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--second-color);
    transform: scaleX(0);
    transition: 0.5s ease-in-out;
    transform-origin: right;
  }
  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }
  &:hover span {
    color: var(--main-color);
  }

  @media ${devices.tabletS} {
    margin-top: 3.5rem;
  }
  @media ${devices.tablet} {
    margin-top: 4rem;
    margin-bottom: 2rem;
  }

  @media ${devices.laptop} {
    width: 160px;
    height: 80px;
    margin-bottom: 1rem;
  }
`;

export const LinkContainer = styled.a`
  position: relative;
  width: 135px;
  height: 60px;
  margin-top: 2rem;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  letter-spacing: 0.1rem;
  font-size: 1rem;
  font-weight: 400;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--second-color);
    transform: scaleX(0);
    transition: 0.5s ease-in-out;
    transform-origin: right;
  }
  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }
  &:hover span {
    color: var(--main-color);
  }

  /* @media ${devices.tabletS} {
  } */
  @media ${devices.tablet} {
    margin-top: 4rem;
    margin-bottom: 2rem;
  }

  @media ${devices.laptop} {
    width: 160px;
    height: 80px;
    margin-bottom: 1rem;
  }
`;

export const LinkContainerResume = styled(LinkContainer)`
  border-color: rgb(127, 76, 245);
  width: 80px;
  height: 60px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(127, 76, 245);
    transform: scaleX(0);
    transition: 0.5s ease-in-out;
    transform-origin: right;
  }

  @media ${devices.tabletS} {
    width: 100px;
  }
  @media ${devices.laptop} {
    width: 130px;
    height: 80px;
  }
`;

export const Span = styled.span`
  color: ${(props) => props.color || 'rgb(14 216 146)'};
  display: inline-block;
  z-index: 2;
  transition: 0.5s ease-in-out;
  &:hover {
    color: #333;
  }
  @media ${devices.laptop} {
    font-size: 1.2rem;
  }
`;

export const I = styled.i`
  position: relative;
  display: inline-block;
  width: 2px;
  height: 30px;
  background: #d3d636;
  transition: 0.5s, width 0.5s, height 0.5s;
  transition-delay: 0s, 0.5s, 1s;
`;
