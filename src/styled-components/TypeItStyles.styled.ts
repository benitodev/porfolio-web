import styled from 'styled-components';

interface TypeItProps {
  fontSize?: string;
  display?: string;
}

export const TypeItStyle = styled.div<TypeItProps>`
  display: ${(props) => props.display ?? 'inline'};
  & > * {
    font-weight: 700;
    font-size: var(--font-size);
    color: var(--title-color);
  }
`;
