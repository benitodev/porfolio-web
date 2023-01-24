import { useObserver } from '../../hooks';
import { ROUTES } from '../../router';
import { Container } from '../../styled-components/Container.styled';
import { Wrapper } from '../../styled-components/Wrapper.styled';
import ContactForm from './components/ContactForm';
import ContactTitle from './components/ContactTitle';

const Contact = () => {
  const { elementRef, isVisible } = useObserver({
    threshold: 0.1,
    root: null,
  });
  return (
    <Container id={ROUTES.CONTACT} alignItems="flex-start" ref={elementRef}>
      <Wrapper>
        <ContactTitle isVisible={isVisible} />
        <ContactForm />
      </Wrapper>
    </Container>
  );
};
export default Contact;
