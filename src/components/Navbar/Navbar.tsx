import { Variants } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import * as Styled from './styled';

const popUp: Variants = {
  hidden: {
    y: '100vh',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

const Navbar = () => {
  return (
    <AnimatePresence
      initial={true}
      exitBeforeEnter={true}
      onExitComplete={() => null}
    >
      <Styled.NavContainer>
        <Styled.Nav
          variants={popUp}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Link to="hero" smooth={true} spy={true}>
            <Styled.NavLink>Home</Styled.NavLink>
          </Link>
          <Link to="projects" smooth={true} spy={true}>
            <Styled.NavLink>Projects</Styled.NavLink>
          </Link>
          <Link to="about" smooth={true} spy={true}>
            <Styled.NavLink>About</Styled.NavLink>
          </Link>
          <Link to="experience" smooth={true} spy={true}>
            <Styled.NavLink>Experience</Styled.NavLink>
          </Link>
        </Styled.Nav>
      </Styled.NavContainer>
    </AnimatePresence>
  );
};

export default Navbar;
