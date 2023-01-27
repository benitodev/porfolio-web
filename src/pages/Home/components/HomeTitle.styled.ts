import styled, { keyframes } from 'styled-components';
import { devices } from '../../../utility/responsive';

const slideAnimation = keyframes`
  100%{
    top: -360px;
  }
`;

const typingAnimation = keyframes`
 40%, 60%{
    left: calc(100% + 30px);
  }
  100%{
    left: 0;
  }
`;

export const MainTitle = styled.h1``;

export const Hello = styled.h2`
  display: inline;
  width: 100%;
  font-size: calc(var(--font-size) - var(--font-size-reduce));
  font-weight: 700;
  position: relative;
  color: #fff;
  /* @media (min-width: 400px) {
    font-size: 5vw;
  } */
`;

export const Span = styled.span`
  font-weight: 500;
  font-size: var(--font-size-p);
  margin-top: 1rem;
  color: var(--gray-color-text);

  /* padding: 0.5rem 0; */
`;

export const SpanAnimated = styled(Span)`
  position: relative;
  color: var(--title-color);

  &::after {
    content: '';
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    background: var(--main-color);
    border-left: 2px solid #fc6d6d;
    animation: ${typingAnimation} 4s steps(12) infinite;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const ListDinamicText = styled.ul`
  height: 90px;
  line-height: 90px;
  overflow: hidden;
  padding: 0;
`;

export const Text = styled.li`
  list-style: none;
  color: #fc6d6d;
  font-weight: 500;
  position: relative;
  top: 0;
`;
