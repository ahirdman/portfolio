import styled from 'styled-components';

interface ISection {
  readonly flex?: boolean;
}

const MainWrapper = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  width: fit-content;
`;

const WhiteSection = styled.section<ISection>`
  width: 100vw;
  height: 100vh;
  background-color: white;

  @media screen and (min-width: 600px) {
    display: ${props => (props.flex ? 'flex' : '')};
  }
`;

const GreySection = styled(WhiteSection)`
  background-color: #3f3f3f;

  @media screen and (min-width: 600px) {
    display: ${props => (props.flex ? 'flex' : '')};
  }
`;

export { MainWrapper, WhiteSection, GreySection };
