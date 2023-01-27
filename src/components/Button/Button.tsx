import { ButtonContainer, LinkContainer, Span } from './Button.styled';

const Button = ({
  link,
  value,
  styles,
  spanColor,
  type = 'link',
}: {
  link?: string;
  value?: string;
  styles?: object;
  spanColor?: string;
  type?: 'button' | 'link';
}) => {
  return (
    <>
      {type === 'button' ? (
        <ButtonContainer id="idbadge">
          <Span color={spanColor}>{value}</Span>
        </ButtonContainer>
      ) : (
        <LinkContainer style={styles} id="idbadge" href={`#${link}`}>
          <Span color={spanColor}>{value}</Span>
        </LinkContainer>
      )}
    </>
  );
};
export default Button;
