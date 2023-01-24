import TypeIt from 'typeit-react';
import { Title } from '../../../styled-components/SectionTitle';
import { TypeItStyle } from '../../../styled-components/TypeItStyles.styled';

interface Props {
  isVisible: boolean;
}

const SkillsTitle = ({ isVisible }: Props) => {
  return (
    <Title>
      Experience in this
      {isVisible && (
        <TypeItStyle display="block" fontSize="9vw">
          <TypeIt
            as="span"
            getBeforeInit={(instance) => {
              instance.type('Skills').pause(1000);

              return instance;
            }}
          />
        </TypeItStyle>
      )}
    </Title>
  );
};
export default SkillsTitle;
