import { Column, GreySection } from 'src/styled/Containers';
import { Header, Title } from 'src/styled/Text';
import styles from '../../styles/Hero.module.css';
import styled from 'styled-components';
import Image from 'next/image';
import useWindowWidth from 'src/utils/hooks';

const HeroTitle = styled(Title)`
  text-align: left;
  padding-top: 0;
  line-height: 2.5rem;
`;

const HeroBody = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.05em;
  color: #ffffff;
`;

const Orange = styled.span`
  color: #ff8a00;
`;

const HeroColumn = styled.main`
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 10rem;
  padding-left: 10rem;
  height: 42vh;

  @media screen and (min-width: 600px) {
    width: 50vw;
    height: 100vh;
    justify-content: center;
  }
`;

const HeroImage = styled.div`
  @media screen and (min-width: 600px) {
    width: 50vw;
    height: 100vh;
    position: relative;
  }
`;

const Hero = () => {
  const { width } = useWindowWidth();
  return (
    <GreySection id="hero">
      <HeroImage>
        <Image
          src={'/images/hero.jpg'}
          alt="me"
          layout={width < 600 ? 'responsive' : 'fill'}
          width={300}
          height={200}
          priority={true}
          objectFit="cover"
          className={styles.hero}
        />
      </HeroImage>
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
