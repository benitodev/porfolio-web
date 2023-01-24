import TypeIt from 'typeit-react';
import { TypeItStyle } from '../../../styled-components/TypeItStyles.styled';
import { Title } from '../../../styled-components/SectionTitle';

interface Props {
  isVisible: boolean;
}

const ProjectTitle = ({ isVisible }: Props) => {
  return (
    <Title>
      Some of my
      {isVisible && (
        <TypeItStyle display="block">
          <TypeIt
            as="span"
            getBeforeInit={(instance) => {
              instance.type('Projects').pause(1000);

              return instance;
            }}
          />
        </TypeItStyle>
      )}
    </Title>
  );
};
export default ProjectTitle;
