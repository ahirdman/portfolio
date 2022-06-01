import styled from 'styled-components';

interface ISection {
  readonly flex?: boolean;
  readonly centered?: boolean;
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

  @media screen and (max-height: 701px) {
    width: 120vw;
    overflow: scroll;
  }

  @media screen and (min-width: 600px) {
    display: ${props => (props.flex ? 'flex' : '')};
    flex-direction: ${props => (props.centered ? 'column' : '')};
    justify-content: ${props => (props.centered ? 'center' : '')};
    align-items: ${props => (props.centered ? 'center' : '')};
  }
`;

const GreySection = styled(WhiteSection)`
  background-color: #3f3f3f;

  @media screen and (min-width: 600px) {
    display: ${props => (props.flex ? 'flex' : '')};
    flex-direction: ${props => (props.centered ? 'column' : '')};
    justify-content: ${props => (props.centered ? 'center' : '')};
    align-items: ${props => (props.centered ? 'center' : '')};
  }
`;

export { MainWrapper, WhiteSection, GreySection };
