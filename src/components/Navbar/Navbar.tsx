import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Container, Img, Left, Right } from './Navbar.styled';

const Navbar = () => {
  const { theme, themeCondition } = useContext(ThemeContext);
  const themeDarkSrc = '/menu-icon.png';
  const themeLightSrc = '/menu-icon-white.png';
  return (
    <Container>
      <Left>Logo</Left>
      <Right>
        <Img
          src={`${themeCondition ? themeDarkSrc : themeLightSrc}`}
          alt="menu-icon"
        />
      </Right>
    </Container>
  );
};
export default Navbar;
