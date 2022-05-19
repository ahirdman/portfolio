import styled from 'styled-components';

const Column = styled.div`
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
  margin-bottom: 20px;
  margin-left: 60px;
  letter-spacing: 0.03em;
`;

export {
  Column,
  HeroColumn,
  Row,
  MainWrapper,
  WhiteSection,
  GreySection,
  NavContainer,
  CardContainer,
};
