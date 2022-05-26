import styled from 'styled-components';

/**
 * Styled Containers
 */

export const ModalLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const ToolsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 4rem;
`;

/**
 * Styled Text
 */

export const ModalTitle = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.03em;
  color: #000000;
  text-align: left;
  width: 90vw;

  @media screen and (min-width: 600px) {
    width: 45vw;
  }
`;

export const ModalBody = styled.p`
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.03em;
  width: 90vw;
  color: #000000;
  text-align: left;
  margin-bottom: 2rem;

  @media screen and (min-width: 600px) {
    width: 45vw;
  }
`;

export const SmallBold = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.03em;
  margin-right: 5px;
  margin-left: 5px;
  color: #9e9e9e;
`;

export const TextLink = styled.a`
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.03em;
  color: #000000;
  display: flex;
  align-items: center;
`;
