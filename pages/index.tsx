import type { NextPage } from 'next';
import Hero from '../src/components/Hero';
import Navbar from '../src/components/Navbar';
import Projects from '../src/components/Projects';
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import { getAllProjects } from '../src/contentful';
import { useState } from 'react';
import { MainWrapper } from 'src/styled/Containers';
import Head from 'next/head';

interface IHomeProps {
  cards?: any;
}

const Home: NextPage = ({ cards }: IHomeProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Alexande Hirdman - Portfolio</title>
      </Head>
      <MainWrapper>
        {!modalOpen && <Navbar />}
        <Hero />
        <Projects
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          cards={cards}
        />
        <About />
        <Contact />
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
