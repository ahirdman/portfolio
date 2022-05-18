import type { NextPage } from 'next';
import Hero from '../src/components/Hero';
import Navbar from '../src/components/Navbar';
import Projects from '../src/components/Projects';
import styles from '../styles/Home.module.css';
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import { getAllProjects, getSingleProject } from '../src/contentful';

interface IHomeProps {
  cards?: any;
}

const Home: NextPage = ({ cards }: IHomeProps) => {
  return (
    <main className={styles.wrapper}>
      <section className={styles.nav}>
        <Navbar />
      </section>
      <section className={styles.containerGrey} id="hero">
        <Hero />
      </section>
      <section className={styles.containerWhite} id="projects">
        <Projects cards={cards} />
      </section>
      <section className={styles.containerGrey} id="about">
        <About />
      </section>
      <section className={styles.containerWhite} id="contact">
        <Contact />
      </section>
    </main>
  );
};

export const getStaticProps = async () => {
  const cards = await getAllProjects();
  return {
    props: { cards },
  };
};

export default Home;
