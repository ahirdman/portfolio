import {
  Header,
  Title,
  Details,
  VerticalTitle,
  BodyText,
} from '../styled/Text';
import { SlidingRow, SlidingColumn, GreySection } from 'src/styled/Containers';
import { Variants } from 'framer-motion';

const paragraphVariants: Variants = {
  offscreen: {
    y: '50vh',
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

const About = () => {
  return (
    <GreySection id="about">
      <Header>
        <Title>ABOUT</Title>
        <Details>Who is Alexander?</Details>
      </Header>
      <SlidingColumn
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.8 }}
      >
        <SlidingRow variants={paragraphVariants}>
          <VerticalTitle>ABOUT ME</VerticalTitle>
          <BodyText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar.
          </BodyText>
        </SlidingRow>
        <SlidingRow variants={paragraphVariants}>
          <VerticalTitle>EXPERIENCE</VerticalTitle>
          <BodyText>
            <strong>/salt</strong> An intensive Full Stack JavaScript Developer
            training program. Besides learning the necessary tools for
            development, the course focused on TDD, Agile & Mob Programming
            <br />
            <br />
            <br />
            <strong>Lådan</strong> An intensive Full Stack JavaScript Developer
            training program. Besides learning the necessary tools for
            development, the course focused on TDD, Agile & Mob Programming
          </BodyText>
        </SlidingRow>
      </SlidingColumn>
    </GreySection>
  );
};

export default About;
