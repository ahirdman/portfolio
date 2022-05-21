import { NavContainer } from '../styled/Containers';
import { NavLink } from 'src/styled/Text';
import { Link } from 'react-scroll';
import { Nav } from 'src/styled/Elements';

const Navbar = () => {
  return (
    <NavContainer>
      <Nav>
        <Link to="hero" smooth={true} spy={true}>
          <NavLink>Home</NavLink>
        </Link>
        <Link to="projects" smooth={true} spy={true}>
          <NavLink>Projects</NavLink>
        </Link>
        <Link to="about" smooth={true} spy={true}>
          <NavLink>About</NavLink>
        </Link>
        <Link to="contact" smooth={true} spy={true}>
          <NavLink>Contact</NavLink>
        </Link>
      </Nav>
    </NavContainer>
  );
};

export default Navbar;
