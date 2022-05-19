import { ICard } from 'src/interface';
import styles from '../../styles/ProjectCard.module.css';

interface IProjectCardProps {
  modalOpen: boolean;
  setModalOpen: any;
  card: ICard;
  setProject: any;
}

const ProjectCard = ({
  modalOpen,
  setModalOpen,
  card,
  setProject,
}: IProjectCardProps) => {
  return (
    <section
      className={styles.card}
      onClick={() => {
        setProject(card.ref);
        modalOpen ? setModalOpen(false) : setModalOpen(true);
      }}
    >
      <p className={styles.title}>{card.title}</p>
      <p className={styles.description}>{card.type}</p>
      <img className={styles.image} src={`https:${card.image}`} />
    </section>
  );
};

export default ProjectCard;
