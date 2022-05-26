import styled from 'styled-components';
import { Title } from 'src/styled/Text';

/**
 * Styled Containers
 */

export const HeroColumn = styled.main`
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 42vh;
  padding-right: 5rem;
  padding-left: 5rem;

  @media screen and (min-width: 600px) {
    width: 50vw;
    height: 100vh;
    justify-content: center;
    padding-right: 10rem;
    padding-left: 10rem;
  }
`;

export const HeroImage = styled.div`
  @media screen and (min-width: 600px) {
    width: 50vw;
    height: 100vh;
    position: relative;
  }
`;

/**
 * Styled Text
 */

export const HeroTitle = styled(Title)`
  text-align: left;
  padding-top: 0;
  line-height: 2.5rem;
`;

export const HeroBody = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.05em;
  color: #ffffff;
`;

export const Orange = styled.span`
  color: #ff8a00;
`;
