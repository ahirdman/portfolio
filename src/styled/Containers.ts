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

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 100vw;
  height: 60vh; */
`;

const CenteredMotion = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
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
  @media screen and (min-width: 600px) {
    display: flex;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CardContainer = styled.div`
  margin-bottom: 1rem;
  margin-left: 25%;
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

const AccordionContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  transform-origin: top center;
  padding-left: 1rem;
`;

const AccordionRow = styled.div`
  display: flex;
  height: 80px;
  margin-bottom: 20px;
  overflow: hidden;
`;

const AccordionSvg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 6rem;
`;

const Container = styled.main`
  padding-right: 1rem;
  padding-left: 1rem;
`;

const HeaderMotion = styled(motion.header)`
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

const SectionMotion = styled(motion.section)`
  overflow: hidden;
`;

export {
  Column,
  SlidingColumn,
  Row,
  Centered,
  MainWrapper,
  WhiteSection,
  GreySection,
  NavContainer,
  CardContainer,
  ToolsContainer,
  ModalLinks,
  AccordionContainer,
  AccordionRow,
  AccordionSvg,
  Container,
  CenteredMotion,
  HeaderMotion,
  SectionMotion,
};
