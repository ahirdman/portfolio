import styled from 'styled-components';
import Image from 'next/image';

/**
 * Styled Containers
 */

export const HeroColumn = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 42vh;
  padding-right: 20%;
  padding-left: 20%;

  @media screen and (min-width: 600px) {
    width: 50vw;
    height: 100vh;
    padding-right: 10%;
    padding-left: 10%;
  }
`;

export const HeroImage = styled.div`
  @media screen and (min-width: 600px) {
    width: 50vw;
    height: 100vh;
    position: relative;
  }
`;

export const StyledImage = styled(Image)`
  mask-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(63, 63, 63, 0.5) 51.56%,
    #3f3f3f 100%
  );

  @media screen and (min-width: 600px) {
    object-fit: cover;
    mask-image: linear-gradient(
      -90deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(63, 63, 63, 0.5) 51.56%,
      #3f3f3f 100%
    );
  }
`;

/**
 * Styled Text
 */

export const HeroTitle = styled.h1`
  text-align: left;
  padding-top: 0;
  line-height: 2.5rem;
  font-weight: 700;
  font-size: 36px;
  letter-spacing: 0.03em;
  color: #ffffff;
  margin-bottom: 20%;
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
