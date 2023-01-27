import TypeIt from 'typeit-react';
import { TypeItStyle } from '../../../styled-components/TypeItStyles.styled';
import { Title } from '../../../styled-components/SectionTitle';
import { useContext } from 'react';
import { LanguageContext } from '../../../context/LanguageContext';
import SectionTitle from '../../../components/Title/SectionTitle';

interface Props {
  isVisible: boolean;
}

const ProjectTitle = ({ isVisible }: Props) => {
  const { translation } = useContext(LanguageContext);
  const ProjecTranslation = translation?.Projects?.ProjectTitle;
  return (
    <Title>
      <SectionTitle
        isVisible={isVisible}
        preTitle={ProjecTranslation?.PreTitle}
        title={ProjecTranslation?.Title}
      />
    </Title>
  );
};
export default ProjectTitle;
