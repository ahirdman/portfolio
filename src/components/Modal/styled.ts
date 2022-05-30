import { motion } from 'framer-motion';
import { ISvgStylesProps, svgProps } from 'src/styled/props';
import styled from 'styled-components';
import * as SVG from './svg';

/**
 * Styled Containers
 */

export const Backdrop = styled(motion.div)`
  position: absolute;
  top: 100vh;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000e1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  @media screen and (min-width: 600px) {
    align-items: center;
    justify-content: center;
  }
`;

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

export const Modal = styled(motion.article)`
  width: 100vw;
  height: 95vh;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding-right: 5vw;
  padding-left: 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 600px) {
    width: 60vw;
    height: 80vh;
    border-radius: 20px;
    padding-right: 5vw;
    padding-left: 5vw;
  }
`;

export const ImageContainer = styled.div`
  width: 90vw;
  height: auto;
  margin-top: 0.5rem;

  @media screen and (min-width: 600px) {
    width: 20vw;
    height: 20vh;
    position: relative;
  }
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
  display: flex;
  align-items: center;

  &:hover {
    color: #9e9e9e;
  }
`;

/**
 * Styled SVG
 */

export const StyledChevronsRight = styled(SVG.ChevronsRight)`
  ${(props: ISvgStylesProps) => svgProps(props)}

  ${TextLink}:hover & path {
    stroke: #9e9e9e;
  }
`;

export const StyledClose = styled(SVG.Close)`
  margin-top: 1.5vh;
  margin-right: 1.5vh;

  @media screen and (min-width: 600px) {
    position: absolute;
    top: 0;
    right: 0;
    margin: 1rem;
  }

  ${(props: ISvgStylesProps) => svgProps(props)}
`;
