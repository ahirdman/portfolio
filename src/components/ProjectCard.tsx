import Image from 'next/image';
import styles from '../../styles/ProjectCard.module.css';

interface IProjectCardProps {
  modalOpen: boolean;
  setModalOpen: any;
}

const ProjectCard = ({ modalOpen, setModalOpen }: IProjectCardProps) => {
  return (
    <>
      <section
        className={styles.card}
        onClick={() => (modalOpen ? setModalOpen(false) : setModalOpen(true))}
      >
        <p className={styles.title}>SPOTIFY</p>
        <p className={styles.description}>Personal Project</p>
        <Image
          className={styles.image}
          src="/images/app.jpeg"
          width={220}
          height={200}
        />
      </section>
    </>
  );
};

export default ProjectCard;
