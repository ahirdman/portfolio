import { Link } from 'react-scroll';
import * as Styled from './styled';

const Navbar = () => {
  return (
    <Styled.NavContainer>
      <Styled.Nav>
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
  );
};

export default Navbar;
