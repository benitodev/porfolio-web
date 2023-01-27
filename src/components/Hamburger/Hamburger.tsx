import { ROUTES } from '../../router';
import { Line } from '../../styled-components/Hr.styled';
import ButtonResume from '../Button/ButtonResume';
import { Container, Item, List } from './Hamburger.styled';

const Hamburger = ({ open }: { open: boolean }) => {
  return (
    <Container className={`${open ? 'showMenu' : 'none'}`}>
      <List>
        <Item href={`#${ROUTES.HOME}`}>Home</Item>
        <Item href={`#${ROUTES.PROJECTS}`}>Projects</Item>
        <Item href={`#${ROUTES.SKILLS}`}>Skills</Item>
        <Item href={`#${ROUTES.CONTACT}`}>Contact</Item>
        <ButtonResume spanColor="rgb(127, 76, 245)" value="CV" />
      </List>
    </Container>
  );
};
export default Hamburger;
