import { motion } from 'framer-motion';
import styled from 'styled-components';

/**
 * Styled Containers
 */

export const CardContainer = styled(motion.div)`
  letter-spacing: 0.03em;
  cursor: pointer;

  @media screen and (min-width: 600px) {
    margin: 20px 40px;
  }
`;

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

/**
 * Styled Text
 */

export const CardTitle = styled.h1`
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  color: #000000;
`;

export const CardDescription = styled.h2`
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 5px;
  color: #626262;
`;
