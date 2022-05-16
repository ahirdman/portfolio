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
          naturalSlideHeight={250}
          totalSlides={3}
          visibleSlides={1.5}
          lockOnWindowScroll={true}
          className={styles.carousel}
        >
          <Slider>
            {/* <div className={styles.spacer}></div> */}
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
