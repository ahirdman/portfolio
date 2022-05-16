import {
  Link,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';
import styles from '../../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="home" smooth={true} spy={true}>
        Home
      </Link>
      <Link to="projects" smooth={true} spy={true}>
        Projects
      </Link>
      <Link to="about" smooth={true} spy={true}>
        About
      </Link>
      <Link to="contact" smooth={true} spy={true}>
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
