import { HeroColumn, GreySection } from 'src/styled/Containers';
import { HeroBody, Header, HeroTitle, Orange } from 'src/styled/Text';
import styles from '../../styles/Hero.module.css';
import Image from 'next/image';

interface IHeroProps {
  modalOpen: boolean;
}

const Hero = ({ modalOpen }: IHeroProps) => {
  return (
    <GreySection id="hero">
      <Image
        src={'/images/hero.jpg'}
        alt="me"
        layout="responsive"
        width={300}
        height={200}
        priority={true}
        className={styles.hero}
      />
      <HeroColumn>
        <Header>
          <HeroTitle>ALEXANDER HIRDMAN</HeroTitle>
        </Header>
        <HeroBody>
          Restaurant manager turned <Orange>fullstack</Orange> developer
          <br />
          <br />I strive to create simplified applications that improves daily
          life
        </HeroBody>
      </HeroColumn>
    </GreySection>
  );
};

export default Hero;
