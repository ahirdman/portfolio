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
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        exitBeforeEnter={true}
        // Fires when all exiting nodes have completed animating out
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
