import styled from 'styled-components';

type ContainerType = {
  flexDirect?: string;
};

export const Container = styled.div<ContainerType>`
  display: flex;
  row-gap: 1rem;
  flex-direction: ${(props) => props.flexDirect ?? 'column'};
  justify-content: center;
  align-items: self-start;
`;

export const Link = styled.a`
  width: 30px;
  height: 30px;
`;
