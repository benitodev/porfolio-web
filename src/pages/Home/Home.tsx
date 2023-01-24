import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { HomeContainer } from '../../styled-components/Container.styled';
import HomeTitle from './components/HomeTitle';
import SocialMediaContainer from './components/SocialMediaContainer';
import { Img, ImgContainer, Wrapper } from './Home.styled';
import { ROUTES } from '../../router';
import Button from '../../components/Button/Button';
import Presentation from './components/Presentation';
import ScrollDown from './components/ScrollDown';

const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);
  const handleTheme = () => {
    // setTheme(theme !== 'dark' ? 'dark' : 'light');
  };

  return (
    <HomeContainer id={ROUTES.HOME} onClick={handleTheme}>
      {/* <Wrapper> */}
      <SocialMediaContainer />
      {/* </Wrapper> */}
      <ImgContainer>
        <Img src="main-image.png" alt="" />
      </ImgContainer>

      <Presentation />
      <ScrollDown />
    </HomeContainer>
  );
};
export default Home;
