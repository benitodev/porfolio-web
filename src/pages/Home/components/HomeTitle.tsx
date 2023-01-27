import {
  Hello,
  ListDinamicText,
  Span,
  SpanAnimated,
  Text,
  Wrapper,
} from './HomeTitle.styled';
import TypeIt from 'typeit-react';
import { TypeItStyle } from '../../../styled-components/TypeItStyles.styled';
import { LanguageContext } from '../../../context/LanguageContext';
import { useContext } from 'react';
const HomeTitle = () => {
  const { translation } = useContext(LanguageContext);
  const HomeTitleTranslation = translation?.Home?.HomeTitle;
  return (
    <>
      <Hello>{HomeTitleTranslation?.Hello ?? 'Hola, bienvenidos'} </Hello>
      <Wrapper>
        <Hello style={{ marginRight: '10px' }}>
          {HomeTitleTranslation?.Im ?? 'Soy'}
        </Hello>
        <TypeItStyle>
          <TypeIt
            as="span"
            getBeforeInit={(instance) => {
              instance
                .type('Benito')
                .pause(1500)
                .delete(6)
                .type('Fullstack')
                .pause(1500)
                .delete(9)
                .type('Developer');
              return instance;
            }}
            options={{
              loop: true,
            }}
          />
        </TypeItStyle>
      </Wrapper>
      <Span>
        {HomeTitleTranslation?.AboutMe ??
          `Gran entusiasta del mundo de la tecnología, el trabajo en equipo y comunicación. 
          Con gusto de aportar, aprender y avanzar en las tareas propuestas, 
          junto a la motivación constante de crecer como profesional.`}
      </Span>
    </>
  );
};
export default HomeTitle;
