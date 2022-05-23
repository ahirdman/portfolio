import 'pure-react-carousel/dist/react-carousel.es.css';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ICard } from 'src/interface';
import { WhiteSection } from 'src/styled/Containers';
import { motion, Variants } from 'framer-motion';
import { ChevronsRight, Close } from '../svg/index';
import { ModalLinks, ToolsContainer } from 'src/styled/Containers';
import { CardContainer } from 'src/styled/Containers';
import { CardDescription, CardTitle } from 'src/styled/Text';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import { nestArray } from '../utils';
import styles from '../../styles/Projects.module.css';
import Image from 'next/image';
import {
  Header,
  Title,
  Details,
  ModalTitle,
  ModalBody,
  SmallBold,
  TextLink,
} from '../styled/Text';

interface IProjectProps {
  cards: ICard[];
  modalOpen: boolean;
  setModalOpen: (modalOpen: boolean) => void;
}

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

interface IProjectCardProps {
  modalOpen: boolean;
  setModalOpen: (modalOpen: boolean) => void;
  card: ICard;
  setProject: any;
}

interface ICarouselProps {
  modalOpen: boolean;
  setModalOpen: (modalOpen: boolean) => void;
  cards: ICard[];
  setProject: any;
}

interface IBackdropProps {
  children: any;
  onClick: any;
}

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

const Carousel = ({
  modalOpen,
  setModalOpen,
  cards,
  setProject,
}: ICarouselProps) => {
  const nestedCards = nestArray(cards);
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={145}
      totalSlides={nestedCards.length}
      visibleSlides={1}
      lockOnWindowScroll={true}
    >
      <DotGroup showAsSelectedForCurrentSlideOnly={true} />
      <Slider>
        {nestedCards.map((nested: any, index: number) => (
          <Slide index={index} key={index}>
            {nested.map((card: ICard, index: number) => {
              return (
                <ProjectCard
                  key={index}
                  modalOpen={modalOpen}
                  setModalOpen={setModalOpen}
                  card={card}
                  setProject={setProject}
                />
              );
            })}
          </Slide>
        ))}
      </Slider>
    </CarouselProvider>
  );
};

const ProjectCard = ({
  modalOpen,
  setModalOpen,
  card,
  setProject,
}: IProjectCardProps) => {
  return (
    <CardContainer
      onClick={() => {
        setProject(card.ref);
        modalOpen ? setModalOpen(false) : setModalOpen(true);
      }}
    >
      <CardTitle>{card.title}</CardTitle>
      <CardDescription>{card.type}</CardDescription>
      <Image
        src={`https:${card.image}`}
        width={200}
        height={200}
        style={{ borderRadius: '5px' }}
      />
    </CardContainer>
  );
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

const Projects = ({ cards, modalOpen, setModalOpen }: IProjectProps) => {
  const [project, setProject] = useState();
  return (
    <WhiteSection id="projects">
      <Header>
        <Title grey>PROJECTS</Title>
        <Details>Some of my work</Details>
      </Header>
      <Carousel
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        cards={cards}
        setProject={setProject}
      />
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {project && modalOpen && (
          <ProjectModal
            project={project}
            handleClose={() => setModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </WhiteSection>
  );
};

export default Projects;
