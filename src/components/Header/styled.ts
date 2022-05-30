import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

interface ITitleProps {
  readonly color?: string;
}

const titleProps = ({ color }: ITitleProps) => {
  return css`
    color: ${color || '#ffffff'};
  `;
};

const Container = styled(motion.header)`
  height: 15vh;
  padding-top: 1rem;
`;

const Title = styled(motion.h1)`
  font-weight: 700;
  font-size: 36px;
  line-height: 54px;
  letter-spacing: 0.03em;
  text-align: center;

  ${(props: ITitleProps) => titleProps(props)}
`;

const Details = styled(motion.h2)`
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #868686;
`;

export { Container, Title, Details };
