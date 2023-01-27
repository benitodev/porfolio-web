import { useContext } from 'react';
import { HomeContainer } from '../../styled-components/Container.styled';
import HomeTitle from './components/HomeTitle';
import SocialMediaContainer from './components/SocialMediaContainer';
import { Img, ImgContainer, Wrapper } from './Home.styled';
import { ROUTES } from '../../router';
import Button from '../../components/Button/Button';
import Presentation from './components/Presentation';
import ScrollDown from './components/ScrollDown';

const Home = () => {
  return (
    <HomeContainer id={ROUTES.HOME}>
      <SocialMediaContainer />

      <ImgContainer>
        <Img src="main-image.png" alt="" />
      </ImgContainer>

      <Presentation />

      <ScrollDown />
    </HomeContainer>
  );
};
export default Home;
