import { motion } from 'framer-motion';
import { ILinkProps, linkProps } from 'src/styled/props';
import styled from 'styled-components';

/**
 * Styled Containers
 */

export const Nav = styled(motion.nav)`
  position: fixed;
  top: 90%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 270px;
  height: 50px;
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  z-index: 1;

  @media screen and (max-height: 701px) {
    top: 85%;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Underline = styled(motion.div)`
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background: white;
`;

/**
 * Styled Text
 */

export const NavLink = styled.p`
  font-weight: 700;
  font-size: 12px;
  color: white;
  line-height: 15px;

  &:hover {
    cursor: pointer;
  }

  ${(props: ILinkProps) => linkProps(props)}
`;
