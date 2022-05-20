import {
  Header,
  Title,
  Details,
  ModalTitle,
  ModalBody,
  SmallBold,
  TextLink,
} from '../styled/Text';
import { motion, Variants } from 'framer-motion';
import { ChevronsRight, Close } from '../assets/index';
import Backdrop from './Backdrop';
import styles from '../../styles/ProjectModal.module.css';
import Image from 'next/image';
import { ModalLinks, ToolsContainer } from 'src/styled/Containers';

interface IProjectDetails {
  details: string;
  gitHub: string;
  deployed?: string;
  result: string;
  screenshot: {
    metadata: [object];
    sys: [object];
    fields: {
      descrption: string;
      file: {
        contentType: string;
        details: [object];
        fileName: string;
        url: string;
      };
      title: string;
    };
  };
  title: string;
  tools: string[];
  why: string;
}

interface IProjectModalProps {
  handleClose: any;
  project?: IProjectDetails;
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

export default ProjectModal;
