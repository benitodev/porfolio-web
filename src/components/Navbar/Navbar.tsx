import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { Container, Img, List, Span, Wrapper } from './Navbar.styled';
import Hamburger from '../Hamburger/Hamburger';
import { Item } from '../Hamburger/Hamburger.styled';
import { ROUTES } from '../../router';
import ButtonLanguage from '../Button/ButtonLanguage';

const Navbar = () => {
  const [openHamburger, setOpenHamburger] = useState<boolean>(false);
  const { translation } = useContext(LanguageContext);
  const navbarTranslation = translation?.Navbar?.Hamburger;

  const themeDarkSrc = '/menu-icon.png';
  const themeLightSrc = '/menu-icon-white.png';
  return (
    <Container>
      <Wrapper>
        <Img
          onClick={() => {
            setOpenHamburger(!openHamburger);
          }}
          src={themeLightSrc}
          alt="menu-icon"
        />
        <Hamburger open={openHamburger} />
        <List className="">
          <Item href={`#${ROUTES.HOME}`}>{navbarTranslation?.Home}</Item>
          <Item href={`#${ROUTES.PROJECTS}`}>
            {navbarTranslation?.Projects}
          </Item>
          <Item href={`#${ROUTES.SKILLS}`}>{navbarTranslation?.Skills}</Item>
          <Item href={`#${ROUTES.CONTACT}`}>{navbarTranslation?.Contact}</Item>
        </List>
      </Wrapper>
      <ButtonLanguage />
    </Container>
  );
};
export default Navbar;
