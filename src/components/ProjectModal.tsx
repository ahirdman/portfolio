import { motion } from 'framer-motion';
import Backdrop from './Backdrop';
import styles from '../../styles/ProjectModal.module.css';
import Image from 'next/image';
import { Header, Title, Details, ModalTitle, ModalBody } from '../styled';

interface IProjectModalProps {
  handleClose: any;
  project?: any;
}

const popUp = {
  hidden: {
    y: '100vh',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

const ProjectModal = ({ handleClose, project }: IProjectModalProps) => {
  return (
    <Backdrop onClick={handleClose}>
      <img
        src="/images/close.svg"
        alt="close"
        onClick={handleClose}
        className={styles.close}
      />
      <motion.div
        onClick={e => e.stopPropagation()}
        className={styles.modal}
        variants={popUp}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Header>
          <Title grey>{project.title}</Title>
          <Details>{project.details}</Details>
        </Header>
        <Image
          src={`https:${project.screenshot.fields.file.url}`}
          width={350}
          height={250}
          className={styles.image}
        />
        <ModalTitle>WHY</ModalTitle>
        <ModalBody>{project.why}</ModalBody>
        <ModalTitle>RESULT</ModalTitle>
        <ModalBody>{project.result}</ModalBody>
      </motion.div>
    </Backdrop>
  );
};

export default ProjectModal;
