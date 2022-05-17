import Image from 'next/image';
import styles from '../../styles/ProjectCard.module.css';

const ProjectCard = () => {
  return (
    <section className={styles.card}>
      <p className={styles.title}>SPOTIFY</p>
      <p className={styles.description}>Personal Project</p>
      <Image
        className={styles.image}
        src="/images/app.jpeg"
        width={220}
        height={200}
      />
    </section>
  );
};

export default ProjectCard;
