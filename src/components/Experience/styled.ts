import { motion } from 'framer-motion';
import styled from 'styled-components';

/**
 * Styled Containers
 */

export const Container = styled.main`
  display: flex;
  justify-content: center;
  padding-right: 2rem;
  padding-left: 2rem;
  margin-bottom: 5vh;
  height: 55vh;
  width: clamp(50%, 500px, 90%);
`;

export const Card = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  margin-left: 5vw;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;
`;

export const SvgLink = styled(motion.div)`
  margin: 10px;

  &:hover {
    cursor: pointer;
  }
`;

/**
 * Styled Text
 */

export const Small = styled.small`
  font-weight: 400;
  font-size: 8px;
  line-height: 18px;
  letter-spacing: 0.05em;
  color: #ababab;
`;
