import styled from 'styled-components';
import SocialMediaContainer from '../../pages/Home/components/SocialMediaContainer';

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 1.5rem 0 1rem 0;
  background-color: #141414;
`;

const Span = styled.span`
  line-height: 1.5em;
  margin-top: 1rem;
  color: var(--gray-color-text);
`;

const Footer = () => {
  return (
    <Container>
      <SocialMediaContainer flexDirection="row" />
      <Span>Designed and built by Benito Álvarez</Span>
    </Container>
  );
};
export default Footer;
