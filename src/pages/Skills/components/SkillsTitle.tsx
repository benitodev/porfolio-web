import TypeIt from 'typeit-react';
import { Title } from '../../../styled-components/SectionTitle';
import { TypeItStyle } from '../../../styled-components/TypeItStyles.styled';
import { useContext } from 'react';
import { LanguageContext } from '../../../context/LanguageContext';
import SectionTitle from '../../../components/Title/SectionTitle';

interface Props {
  isVisible: boolean;
}

const SkillsTitle = ({ isVisible }: Props) => {
  const { translation, language } = useContext(LanguageContext);
  const SkillsTranslation = translation?.Skills?.SkillsTitle;
  return (
    <Title>
      <SectionTitle
        isVisible={isVisible}
        preTitle={SkillsTranslation?.PreTitle}
        title={SkillsTranslation?.Title}
      />
    </Title>
  );
};
export default SkillsTitle;
