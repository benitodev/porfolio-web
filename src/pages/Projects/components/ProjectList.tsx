import { Container } from '../styled-components/ProjectList.styled';
import CardContent from './CardContent';
import projects from '../../../data/Projects.json';

const ProjectList = () => {
  return (
    <Container>
      {projects.map((content) => (
        <CardContent key={content.title} {...content} />
      ))}
    </Container>
  );
};
export default ProjectList;
