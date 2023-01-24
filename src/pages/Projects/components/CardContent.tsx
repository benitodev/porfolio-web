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
  technologies: string[];
}

const CardContent = ({ title, stack, url, technologies }: Props) => {
  return (
    <CardContainer>
      <ImgContainer>
        <DarkenedBackground>
          <IconsContainer className="IconContainer">
            <BorderRadius>
              <GithubIcon fill="#fff" />
            </BorderRadius>
            <BorderRadius>
              <LinkEyeIcon />
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
