import { Column, GreySection } from 'src/styled/Containers';
import { Header, Title } from 'src/styled/Text';
// import { Header, Title } from 'src/styled/Text';
// import { Column, GreySection } from 'src/styled/Containers';

const Hero = () => {
  return (
    <GreySection id="hero">
      <Column>
        <Header>
          <Title>ALEXANDER HIRDMAN</Title>
        </Header>
      </Column>
    </GreySection>
  );
};

export default Hero;
