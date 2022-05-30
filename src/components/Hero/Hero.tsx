import { GreySection } from 'src/styled/Containers';
import { IWindow } from 'src/interface';
import useWindowSize from 'src/utils/hooks';
import * as s from './styled';

const Hero = () => {
  const size: IWindow = useWindowSize();

  return (
    <GreySection id="Home" flex>
      <s.HeroImage>
        {size.width && size.width < 600 && (
          <s.StyledImage
            src="/images/hero.jpg"
            alt="me"
            layout="responsive"
            width={300}
            height={200}
            priority={true}
          />
        )}
        {size.width && size.width >= 600 && (
          <s.StyledImage
            src="/images/hero.jpg"
            alt="me"
            layout="fill"
            priority={true}
            objectFit="cover"
          />
        )}
      </s.HeroImage>
      <s.HeroColumn>
        <s.Header>
          <s.HeroTitle>ALEXANDER HIRDMAN</s.HeroTitle>
        </s.Header>
        <s.HeroBody>
          Restaurant manager turned <s.Orange>fullstack</s.Orange> developer
          <br />
          <br />I strive to create simplified applications that improves daily
          life
        </s.HeroBody>
      </s.HeroColumn>
    </GreySection>
  );
};

export default Hero;
