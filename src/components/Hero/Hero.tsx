import { GreySection } from 'src/styled/Containers';
import { IWindow } from 'src/interface';
import { Header } from 'src/styled/Text';
import useWindowSize from 'src/utils/hooks';
import styles from '../../../styles/Hero.module.scss';
import Image from 'next/image';
import * as Styled from './styled';

const Hero = () => {
  const size: IWindow = useWindowSize();

  const layout =
    size.width !== undefined && size.width >= 600 ? 'fill' : 'responsive';

  return (
    <GreySection id="hero" flex>
      <Styled.HeroImage>
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
      </Styled.HeroImage>
      <Styled.HeroColumn>
        <Header>
          <Styled.HeroTitle>ALEXANDER HIRDMAN</Styled.HeroTitle>
        </Header>
        <Styled.HeroBody>
          Restaurant manager turned <Styled.Orange>fullstack</Styled.Orange>{' '}
          developer
          <br />
          <br />I strive to create simplified applications that improves daily
          life
        </Styled.HeroBody>
      </Styled.HeroColumn>
    </GreySection>
  );
};

export default Hero;
