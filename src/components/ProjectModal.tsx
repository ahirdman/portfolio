import { Header, Title, Details, ModalTitle, ModalBody } from '../styled/Text';
import { motion, Variants } from 'framer-motion';
import { Close } from '../assets/index';
import Backdrop from './Backdrop';
import styles from '../../styles/ProjectModal.module.css';
import Image from 'next/image';

interface IProjectModalProps {
  handleClose: any;
  project?: any;
}

const popUp: Variants = {
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
      <Close className={styles.close} />
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
        <div className={styles.image}>
          <Image
            src={`https:${project.screenshot.fields.file.url}`}
            width={192}
            height={108}
            priority={true}
            layout="responsive"
            style={{ borderRadius: '5px' }}
          />
        </div>
        <ModalTitle>WHY</ModalTitle>
        <ModalBody>{project.why}</ModalBody>
        <ModalTitle>RESULT</ModalTitle>
        <ModalBody>{project.result}</ModalBody>
      </motion.div>
    </Backdrop>
  );
};

export default ProjectModal;
