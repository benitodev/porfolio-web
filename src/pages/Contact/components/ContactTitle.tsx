import TypeIt from 'typeit-react';
import { Title } from '../../../styled-components/SectionTitle';
import { TypeItStyle } from '../../../styled-components/TypeItStyles.styled';
import { Container } from './ContactTitle.styled';

interface Props {
  isVisible: boolean;
}

const ContactTitle = ({ isVisible }: Props) => {
  return (
    <Title>
      Are you interested?
      {isVisible && (
        <TypeItStyle display="block" fontSize="9vw">
          <TypeIt
            as="span"
            getBeforeInit={(instance) => {
              instance.type('Contact me').pause(1000);

              return instance;
            }}
          />
        </TypeItStyle>
      )}
    </Title>
  );
};
export default ContactTitle;
