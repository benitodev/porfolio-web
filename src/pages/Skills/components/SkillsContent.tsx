import DatabaseIcon from '../../../components/icons/DatabaseIcon';
import FrontendIcon from '../../../components/icons/FrontendIcon';
import {
  Container,
  SkillContainer,
  Tag,
  TagContainer,
  Title,
} from './SkillsContent.styled';

const SkillsContent = () => {
  return (
    <Container>
      <SkillContainer>
        <FrontendIcon fill="rgb(180 17 111)" />
        <Title>Frontend</Title>
        <TagContainer>
          <Tag>Javascript</Tag>
          <Tag>Typescript</Tag>
          <Tag>ReactJs</Tag>
          <Tag>Material UI</Tag>
          <Tag>Redux Toolkit</Tag>
          <Tag>Graphql</Tag>
        </TagContainer>
      </SkillContainer>

      <SkillContainer>
        <DatabaseIcon fill="rgb(180 17 111)" />
        <Title>Backend</Title>
        <TagContainer>
          <Tag>Node js</Tag>
          <Tag>Typescript</Tag>
          <Tag>Express</Tag>
          <Tag>MongoDB</Tag>
          <Tag>Mongoose</Tag>
          <Tag>Graphql</Tag>
        </TagContainer>
      </SkillContainer>
    </Container>
  );
};
export default SkillsContent;
