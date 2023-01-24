import { useObserver } from '../../hooks';
import { ROUTES } from '../../router';
import { Container } from '../../styled-components/Container.styled';
import { ContainerObserver } from '../../styled-components/ContainerObserver.styled';
import { Wrapper } from '../../styled-components/Wrapper.styled';
import SkillsContent from './components/SkillsContent';
import SkillsTitle from './components/SkillsTitle';

const Skills = () => {
  const { elementRef, isVisible } = useObserver({
    threshold: 0.1,
    root: null,
  });
  return (
    <Container id={ROUTES.SKILLS} alignItems="flex-start" ref={elementRef}>
      <Wrapper>
        <SkillsTitle isVisible={isVisible} />
        <SkillsContent />
      </Wrapper>
    </Container>
  );
};
export default Skills;
