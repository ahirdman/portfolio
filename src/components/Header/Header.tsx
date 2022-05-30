import { headerVariants, headerVariantsSecond } from './motionVariants';
import { Container, Title, Details } from './styled';

interface IHeaderProps {
  title: string;
  description: string;
  grey?: boolean;
}

const Header = ({ grey, title, description }: IHeaderProps) => {
  return (
    <Container
      initial="offscreen"
      whileInView="onscreen"
      viewport={{
        once: true,
        amount: 'all',
      }}
    >
      {grey ? (
        <Title variants={headerVariants} $dark>
          {title}
        </Title>
      ) : (
        <Title variants={headerVariants}>{title}</Title>
      )}
      <Details variants={headerVariantsSecond}>{description}</Details>
    </Container>
  );
};

export default Header;
