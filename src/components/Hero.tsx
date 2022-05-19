import Image from 'next/image';
import { HeroColumn, GreySection } from 'src/styled/Containers';
import { HeroBody, Header, HeroTitle } from 'src/styled/Text';
import styles from '../../styles/Hero.module.css';

const Hero = () => {
  return (
    <GreySection id="hero">
      <Image
        src={'/images/hero.jpg'}
        alt="me"
        layout="responsive"
        width={300}
        height={200}
        className={styles.hero}
      />
      <HeroColumn>
        <Header>
          <HeroTitle>ALEXANDER HIRDMAN</HeroTitle>
        </Header>
        <HeroBody>
          Restaurant manager turned fullstack developer.
          <br />
          <br />I strive to create simplified applications that improves daily
          life.
        </HeroBody>
      </HeroColumn>
    </GreySection>
  );
};

export default Hero;
