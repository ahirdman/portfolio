import styled from 'styled-components';
import { motion } from 'framer-motion';

const Column = styled.div`
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SlidingColumn = styled(motion.div)`
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HeroColumn = styled(Column)`
  position: relative;
  bottom: 2rem;
  margin-right: 5rem;
  margin-left: 5rem;
  height: 42vh;
  justify-content: space-between;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
`;

const ModalLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const SlidingRow = styled(motion.div)`
  display: flex;
  justify-content: center;
`;

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 60vh;
`;

const MainWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: fit-content;
`;

const WhiteSection = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
`;

const GreySection = styled(WhiteSection)`
  background-color: #3f3f3f;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CardContainer = styled.div`
  margin-bottom: 1rem;
  margin-left: 60px;
  letter-spacing: 0.03em;
`;

const ToolsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 4rem;
`;

export {
  Column,
  SlidingColumn,
  HeroColumn,
  Row,
  SlidingRow,
  Centered,
  MainWrapper,
  WhiteSection,
  GreySection,
  NavContainer,
  CardContainer,
  ToolsContainer,
  ModalLinks,
};
