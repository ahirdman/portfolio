import {
  Header,
  Title,
  Details,
  Column,
  VerticalTitle,
  Row,
  BodyText,
} from '../styled';

const About = () => {
  return (
    <>
      <Header>
        <Title>ABOUT</Title>
        <Details>Who is Alexander?</Details>
      </Header>
      <Column>
        <Row>
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
        </Row>
        <Row>
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
        </Row>
      </Column>
    </>
  );
};

export default About;
