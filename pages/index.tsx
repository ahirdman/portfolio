import type { NextPage } from 'next';
import Hero from '../src/components/Hero';
import Navbar from '../src/components/Navbar';
import Projects from '../src/components/Projects';
import styles from '../styles/Home.module.css';
import About from '../src/components/About';
import Contact from '../src/components/Contact';

const Home: NextPage = () => {
  return (
    <main className={styles.cotainer}>
      <section className={styles.navcontainer}>
        <Navbar />
      </section>
      <section className={styles.home} id="home">
        <Hero />
      </section>
      <section className={styles.projects} id="projects">
        <Projects />
      </section>
      <section className={styles.about} id="about">
        <About />
      </section>
      <section className={styles.contact} id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default Home;
