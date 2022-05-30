import { headerVariants, headerVariantsSecond } from './motionVariants';
import { Container, Title, Details } from './styled';

interface IHeaderProps {
  title: string;
  description: string;
  grey?: boolean;
  noAnimate?: boolean;
}

const Header = ({ grey, title, description, noAnimate }: IHeaderProps) => {
  return (
    <Container
      initial={noAnimate ? undefined : 'offscreen'}
      whileInView={noAnimate ? undefined : 'onscreen'}
      viewport={
        noAnimate
          ? undefined
          : {
              once: true,
              amount: 'all',
            }
      }
    >
      <Title variants={headerVariants} color={grey ? '#3f3f3f' : ''}>
        {title}
      </Title>
      <Details variants={headerVariantsSecond}>{description}</Details>
    </Container>
  );
};

export default Header;
