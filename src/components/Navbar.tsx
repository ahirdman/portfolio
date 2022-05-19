import { Link } from 'react-scroll';
import { Nav } from 'src/styled/Elements';
import { NavContainer } from '../styled/Containers';

const Navbar = () => {
  return (
    <NavContainer>
      <Nav>
        <Link to="hero" smooth={true} spy={true}>
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
      </Nav>
    </NavContainer>
  );
};

export default Navbar;
