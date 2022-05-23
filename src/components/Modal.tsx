import { ModalLinks, ToolsContainer } from 'src/styled/Containers';
import styles from '../../styles/Projects.module.css';
import { ChevronsRight, Close } from '../svg/index';
import { motion, Variants } from 'framer-motion';
import { IProjectDetails } from 'src/interface';
import Image from 'next/image';
import {
  ModalTitle,
  ModalBody,
  SmallBold,
  TextLink,
  Header,
  Title,
  Details,
} from '../styled/Text';
import { ReactNode, useEffect } from 'react';

interface IBackdropProps {
  children: ReactNode;
  onClick: any;
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

const Backdrop = ({ children, onClick }: IBackdropProps) => {
  return (
    <motion.div
      className={styles.backdrop}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

interface IProjectModalProps {
  handleClose: (modalOpen: boolean) => void;
  project?: IProjectDetails;
}

export const ProjectModal = ({ handleClose, project }: IProjectModalProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
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
        {project && (
          <>
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
            <ToolsContainer>
              {project.tools.map((tool: string, index: number) => (
                <SmallBold key={index}>{tool}</SmallBold>
              ))}
            </ToolsContainer>
            <ModalTitle>WHY</ModalTitle>
            <ModalBody>{project.why}</ModalBody>
            <ModalTitle>RESULT</ModalTitle>
            <ModalBody>{project.result}</ModalBody>
            <ModalLinks>
              <TextLink
                href={project.gitHub}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                github repo
                <ChevronsRight className={styles.chevron} />
              </TextLink>
              <TextLink
                href={project.deployed}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                deployed app
                <ChevronsRight className={styles.chevron} />
              </TextLink>
            </ModalLinks>
          </>
        )}
      </motion.div>
    </Backdrop>
  );
};
