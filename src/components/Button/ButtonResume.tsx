import { LinkContainer, LinkContainerResume, Span } from './Button.styled';

const ButtonResume = ({
  link,
  value,
  spanColor,
}: {
  link?: string;
  value?: string;
  styles?: object;
  spanColor?: string;
}) => {
  return (
    <LinkContainerResume
      style={{ borderColor: 'rgb(127, 76, 245)' }}
      id="idbadge"
      href="cv.pdf"
      download="cv.pdf"
    >
      <Span color={spanColor}>{value}</Span>
    </LinkContainerResume>
  );
};
export default ButtonResume;
