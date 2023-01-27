import TypeIt from 'typeit-react';
import { Title } from '../../../styled-components/SectionTitle';
import { TypeItStyle } from '../../../styled-components/TypeItStyles.styled';
import { Container } from './ContactTitle.styled';
import SectionTitle from '../../../components/Title/SectionTitle';
import { LanguageContext } from '../../../context/LanguageContext';
import { useContext } from 'react';

interface Props {
  isVisible: boolean;
}

const ContactTitle = ({ isVisible }: Props) => {
  const { translation } = useContext(LanguageContext);
  const ContactTranslation = translation?.Contact?.ContactTitle;

  return (
    <SectionTitle
      isVisible={isVisible}
      preTitle={ContactTranslation?.PreTitle}
      title={ContactTranslation?.Title}
    ></SectionTitle>
  );
};
export default ContactTitle;
