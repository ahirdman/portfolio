import { Header, Title, Details } from '../styled';
import Carousel from './Carousel';

const Projects = () => {
  return (
    <>
      <Header>
        <Title grey>PROJECTS</Title>
        <Details>Some of my work</Details>
      </Header>
      <Carousel />
    </>
  );
};

export default Projects;
