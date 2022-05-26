import type { NextPage } from 'next';
import { getAllProjects } from '../src/contentful';
import { useState } from 'react';
import { MainWrapper } from 'src/styled/Containers';
import Hero from '../src/components/Hero/Hero';
import Navbar from '../src/components/Navbar/Navbar';
import Projects from '../src/components/Projects/Projects';
import About from '../src/components/About/About';
import Experience from '../src/components/Experience/Experience';
import Meta from 'src/components/Meta';

interface IHomeProps {
  cards?: any;
}

const Home: NextPage = ({ cards }: IHomeProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Meta />
      <MainWrapper>
        {!modalOpen && <Navbar />}
        <Hero />
        <Projects
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          cards={cards}
        />
        <About />
        <Experience />
      </MainWrapper>
    </>
  );
};

export const getStaticProps = async () => {
  const cards = await getAllProjects();
  return {
    props: { cards },
  };
};

export default Home;
