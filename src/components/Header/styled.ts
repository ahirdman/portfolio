import { motion } from 'framer-motion';
import styled from 'styled-components';

interface ITitle {
  readonly grey?: boolean;
}

// interface IHeaderProps {
//   readonly whileInView?: string
//   readonly inital?: string
//   readonly viewport?: string
// }

// const headerStyles = ({ whileInView, initial, viewport }) => {

// }

const Header = styled(motion.header)`
  height: 15vh;
  padding-top: 1rem;
`;

const Container = styled(motion.header)`
  height: 15vh;
  padding-top: 1rem;
`;

const Title = styled(motion.h1)<ITitle>`
  font-weight: 700;
  font-size: 36px;
  line-height: 54px;
  letter-spacing: 0.03em;
  text-align: center;
  color: ${props => (props.grey ? '#3f3f3f' : '#ffffff')};
`;

const Details = styled(motion.h2)`
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #868686;
`;

export { Header, Container, Title, Details };
