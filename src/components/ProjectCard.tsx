import Image from 'next/image';
import styles from '../../styles/ProjectCard.module.css';

const ProjectCard = () => {
  return (
    <div>
      <p className={styles.title}>SPOTIFY</p>
      <p className={styles.description}>Personal Project</p>
      <Image
        className={styles.image}
        src="/images/app.jpeg"
        width={200}
        height={200}
      />
    </div>
  );
};

export default ProjectCard;
