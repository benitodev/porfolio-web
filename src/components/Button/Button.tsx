import { LinkContainer, Span } from './Button.styled';

const Button = ({
  link,
  value,
  styles,
  spanColor,
}: {
  link?: string;
  value?: string;
  styles?: object;
  spanColor?: string;
}) => {
  return (
    <LinkContainer style={styles} id="idbadge" href={`#${link}`}>
      <Span color={spanColor}>{value}</Span>
    </LinkContainer>
  );
};
export default Button;
