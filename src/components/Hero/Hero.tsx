import { GreySection } from 'src/styled/Containers';
import { IWindow } from 'src/interface';
import useWindowSize from 'src/utils/hooks';
import styles from '../../../styles/Hero.module.scss';
import Image from 'next/image';
import * as Styled from './styled';

const Hero = () => {
  const size: IWindow = useWindowSize();

  return (
    <GreySection id="hero" flex>
      <Styled.HeroImage>
        {size.width && size.width < 600 && (
          <Image
            src="/images/hero.jpg"
            alt="me"
            layout="responsive"
            width={300}
            height={200}
            priority={true}
            className={styles.hero}
          />
        )}
        {size.width && size.width >= 600 && (
          <Image
            src="/images/hero.jpg"
            alt="me"
            layout="fill"
            priority={true}
            objectFit="cover"
            className={styles.hero}
          />
        )}
      </Styled.HeroImage>
      <Styled.HeroColumn>
        <Styled.Header>
          <Styled.HeroTitle>ALEXANDER HIRDMAN</Styled.HeroTitle>
        </Styled.Header>
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
