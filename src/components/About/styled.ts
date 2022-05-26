import styled from 'styled-components';
import { motion } from 'framer-motion';

/**
 * Styled Containers
 */

export const AccordionContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  transform-origin: top center;
  padding-left: 1rem;
`;

export const AccordionRow = styled.div`
  display: flex;
  height: 80px;
  margin-bottom: 20px;
  overflow: hidden;
`;

export const AccordionSvg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 6rem;
`;

export const HeaderMotion = styled(motion.header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  height: 50px;
  margin-bottom: 20px;
  padding-right: 1rem;
  padding-left: 1rem;
`;

export const SectionMotion = styled(motion.section)`
  overflow: hidden;
`;

export const CenteredMotion = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.main`
  padding-right: 1rem;
  padding-left: 1rem;
`;

/**
 * Styled Text
 */

export const AccBody = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.05em;
  color: #ffffff;
  width: 200px;
`;

export const AccHeader = styled.h1`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: #ffffff;
`;

export const AccTitle = styled.h2`
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.05em;
  color: #ffffff;
  margin-bottom: 10px;
`;
