import { Header, Title, Details } from '../styled';
import Carousel from './Carousel';
import ProjectModal from './ProjectModal';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Header>
        <Title grey>PROJECTS</Title>
        <Details>Some of my work</Details>
      </Header>
      <Carousel modalOpen={modalOpen} setModalOpen={setModalOpen} />

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
        {modalOpen && <ProjectModal handleClose={() => setModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Projects;
