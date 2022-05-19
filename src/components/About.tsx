import {
  Header,
  Title,
  Details,
  VerticalTitle,
  BodyText,
} from '../styled/Text';
import { Row, Column, GreySection } from 'src/styled/Containers';
import { motion, Variants } from 'framer-motion';

const paragraphVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    transition: {
      type: 'spring',
      bounce: 0.1,
      duration: 0.4,
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
      <Column>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div variants={paragraphVariants}>
            <Row>
              <VerticalTitle>ABOUT ME</VerticalTitle>
              <BodyText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
              </BodyText>
            </Row>
            <Row style={{ marginTop: '3rem' }}>
              <VerticalTitle>EXPERIENCE</VerticalTitle>
              <BodyText>
                <strong>/salt</strong> An intensive Full Stack JavaScript
                Developer training program. Besides learning the necessary tools
                for development, the course focused on TDD, Agile & Mob
                Programming
                <br />
                <br />
                <br />
                <strong>Lådan</strong> An intensive Full Stack JavaScript
                Developer training program. Besides learning the necessary tools
                for development, the course focused on TDD, Agile & Mob
                Programming
              </BodyText>
            </Row>
          </motion.div>
        </motion.div>
      </Column>
    </GreySection>
  );
};

export default About;
