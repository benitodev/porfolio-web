import GithubIcon from '../../../components/icons/GithubIcon';
import LinkEyeIcon from '../../../components/icons/LinkEyeIcon';
import {
  CardContainer,
  ImgContainer,
  Content,
  Title,
  TagContainer,
  Tag,
  Stack,
  DarkenedBackground,
  IconsContainer,
  BorderRadius,
} from '../styled-components/ProjectList.styled';

interface Props {
  title: string;
  stack: string;
  url: string;
  github_url: string;
  technologies: string[];
}

const CardContent = ({
  title,
  stack,
  url,
  technologies,
  github_url,
}: Props) => {
  return (
    <CardContainer>
      <ImgContainer>
        <DarkenedBackground>
          <IconsContainer className="IconContainer">
            <BorderRadius>
              <a href={github_url} target="_blank">
                <GithubIcon fill="#fff" />
              </a>
            </BorderRadius>
            <BorderRadius>
              <a
                href="https://github.com/benitodev/hackathon-gentleman-programming"
                target="_blank"
              >
                <LinkEyeIcon />
              </a>
            </BorderRadius>
          </IconsContainer>
        </DarkenedBackground>
        <img src={url} alt="" />
      </ImgContainer>

      <Content>
        <Title>{title}</Title>
        <Stack>{stack}</Stack>
        <TagContainer>
          {technologies.map((label) => (
            <Tag key={label}>{label}</Tag>
          ))}
        </TagContainer>
      </Content>
    </CardContainer>
  );
};
export default CardContent;
