import { GreySection } from 'src/styled/Containers';
import { Header, Title } from 'src/styled/Text';
import styles from '../../styles/Hero.module.css';
import styled from 'styled-components';
import Image from 'next/image';
import useWindowSize from 'src/utils/hooks';
import { IWindow } from 'src/interface';

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
  height: 42vh;
  padding-right: 5rem;
  padding-left: 5rem;

  @media screen and (min-width: 600px) {
    width: 50vw;
    height: 100vh;
    justify-content: center;
    padding-right: 10rem;
    padding-left: 10rem;
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
  const size: IWindow = useWindowSize();

  const layout =
    size.width !== undefined && size.width >= 600 ? 'fill' : 'responsive';

  return (
    <GreySection id="hero" flex>
      <HeroImage>
        <Image
          src="/images/hero.jpg"
          alt="me"
          layout={layout}
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
