import { Header, Title, Details } from '../styled/Text';
import Carousel from './Carousel';
import ProjectModal from './ProjectModal';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ICard } from 'src/interface';
import { WhiteSection } from 'src/styled/Containers';

interface IProjectProps {
  cards: ICard[];
  modalOpen: boolean;
  setModalOpen: any;
}

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
