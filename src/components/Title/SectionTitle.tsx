import TypeIt from 'typeit-react';
import { Title } from '../../styled-components/SectionTitle';
import { TypeItStyle } from '../../styled-components/TypeItStyles.styled';

interface Props {
  isVisible: boolean;
  preTitle: string;
  title: string;
}

const SectionTitle = ({ isVisible, preTitle, title }: Props) => {
  return (
    <Title>
      {preTitle}
      {isVisible && title && (
        <TypeItStyle display="block" fontSize="9vw">
          <TypeIt
            as="span"
            options={{
              strings: `${title}`,
            }}
          >
            {title}
          </TypeIt>
        </TypeItStyle>
      )}
    </Title>
  );
};
export default SectionTitle;
