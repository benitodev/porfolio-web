import { useEffect, useState } from 'react';
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
const HomeTitle = () => {
  const [currentText, setCurrentText] = useState<string>('');
  useEffect(() => {
    setTimeout(() => {
      setCurrentText((current) => current + 'a');
    }, 3000);
  }, [currentText]);
  return (
    <>
      <Hello>Hi everyone, </Hello>
      <Wrapper>
        <Hello style={{ marginRight: '10px' }}>I'm</Hello>
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
        I've been in this for more than 2 years and the passion for coding never
        dissapears
      </Span>
    </>
  );
};
export default HomeTitle;
