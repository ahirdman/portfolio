import styles from '../../styles/Projects.module.css';
import Carousel from './Carousel';

const Projects = () => {
  return (
    <>
      <div className={styles.header}>
        <p className={styles.title}>PROJECTS</p>
        <p className={styles.description}>Some of my work</p>
      </div>
      <Carousel />
    </>
  );
};

export default Projects;
