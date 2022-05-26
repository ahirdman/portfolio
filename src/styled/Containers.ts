import styled from 'styled-components';

interface ISection {
  readonly flex?: boolean;
}

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

const GreySection = styled(WhiteSection)<ISection>`
  background-color: #3f3f3f;

  @media screen and (min-width: 600px) {
    display: ${props => (props.flex ? 'flex' : '')};
  }
`;

export { MainWrapper, WhiteSection, GreySection };
