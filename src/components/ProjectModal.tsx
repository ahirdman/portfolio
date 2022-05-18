import { motion } from 'framer-motion';
import Backdrop from './Backdrop';
import styles from '../../styles/ProjectModal.module.css';
import Image from 'next/image';
import { Header, Title, Details, ModalTitle, ModalBody } from '../styled';

interface IProjectModalProps {
  handleClose: any;
  text?: any;
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

const ProjectModal = ({ handleClose, text }: IProjectModalProps) => {
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
          <Title grey>SPOTIFY</Title>
          <Details>Generate Playlists based on tags</Details>
        </Header>
        <Image
          src="/images/app.jpeg"
          width={350}
          height={250}
          className={styles.image}
        />
        <ModalTitle>WHY</ModalTitle>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent
        </ModalBody>
        <ModalTitle>RESULT</ModalTitle>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent
        </ModalBody>
      </motion.div>
    </Backdrop>
  );
};

export default ProjectModal;
