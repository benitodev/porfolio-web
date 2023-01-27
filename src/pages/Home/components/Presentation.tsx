import { useContext } from 'react';
import Button from '../../../components/Button/Button';
import ButtonResume from '../../../components/Button/ButtonResume';
import { LanguageContext } from '../../../context/LanguageContext';
import { ROUTES } from '../../../router';
import HomeTitle from './HomeTitle';
import { Container } from './Presentation.styled';
import ScrollDown from './ScrollDown';

const Presentation = () => {
  const { translation } = useContext(LanguageContext);
  const Presentation = translation?.Home?.Presentation;
  return (
    <Container>
      <HomeTitle />
      <div
        style={{
          display: 'flex',
          columnGap: '20px',
          width: '100%',
        }}
      >
        <Button value={Presentation?.ContactButton} link={ROUTES.CONTACT} />
        <ButtonResume
          value="CV"
          spanColor="rgb(127, 76, 245)"
          link={ROUTES.CONTACT}
        />
      </div>
    </Container>
  );
};
export default Presentation;
