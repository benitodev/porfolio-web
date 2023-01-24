import styled from 'styled-components';
import { Container } from '../../styled-components/Container.styled';
import ProjectList from './components/ProjectList';
import { useObserver } from '../../hooks';
import ProjectTitle from './components/ProjectTitle';
import { ContainerObserver } from '../../styled-components/ContainerObserver.styled';
import { Wrapper } from '../../styled-components/Wrapper.styled';
import { ROUTES } from '../../router';

const Projects = () => {
  const { elementRef, isVisible } = useObserver({
    threshold: 0.1,
    root: null,
  });

  console.log(isVisible);
  return (
    <Container
      alignItems="flex-start"
      margin="0 0 3rem"
      id={ROUTES.PROJECTS}
      ref={elementRef}
    >
      <Wrapper>
        <ProjectTitle isVisible={isVisible} />
        <ProjectList />
      </Wrapper>
    </Container>
  );
};
export default Projects;
