import { headerVariants, headerVariantsSecond } from './motionVariants';
import { Container, Title, Details } from './styled';

interface IHeaderProps {
  title: string;
  grey?: boolean;
}

const Header = ({ grey, title }: IHeaderProps) => {
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
        <Title grey variants={headerVariants}>
          {title}
        </Title>
      ) : (
        <Title variants={headerVariants}>{title}</Title>
      )}
      <Details variants={headerVariantsSecond}>Some of my work</Details>
    </Container>
  );
};

export default Header;
