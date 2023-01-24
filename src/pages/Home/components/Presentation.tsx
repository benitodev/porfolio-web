import Button from '../../../components/Button/Button';
import ButtonResume from '../../../components/Button/ButtonResume';
import { ROUTES } from '../../../router';
import HomeTitle from './HomeTitle';
import { Container } from './Presentation.styled';
import ScrollDown from './ScrollDown';

const Presentation = () => {
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
        <Button value="Contact me!" link={ROUTES.CONTACT} />
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
