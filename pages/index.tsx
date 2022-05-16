import type { NextPage } from 'next';
import Hero from '../src/components/Hero';
import Navbar from '../src/components/Navbar';
import Projects from '../src/components/Projects';
import styles from '../styles/Home.module.css';
import About from '../src/components/About';
import Contact from '../src/components/Contact';

const Home: NextPage = () => {
  return (
    <main className={styles.wrapper}>
      <section className={styles.nav}>
        <Navbar />
      </section>
      <section className={styles.containerGrey} id="hero">
        <Hero />
      </section>
      <section className={styles.containerWhite} id="projects">
        <Projects />
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

export default Home;
