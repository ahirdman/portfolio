import styles from '../../styles/Projects.module.css';
import ProjectCard from './ProjectCard';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Projects = () => {
  return (
    <>
      <div className={styles.header}>
        <p className={styles.title}>PROJECTS</p>
        <p className={styles.description}>Some of my work</p>
      </div>
      <div className={styles.container}>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={200}
          totalSlides={2}
          visibleSlides={1.8}
          className={styles.carousel}
        >
          <Slider>
            <Slide index={0}>
              <ProjectCard />
              <ProjectCard />
            </Slide>
            <Slide index={1}>
              <ProjectCard />
              <ProjectCard />
            </Slide>
          </Slider>
        </CarouselProvider>
      </div>
    </>
  );
};

export default Projects;
