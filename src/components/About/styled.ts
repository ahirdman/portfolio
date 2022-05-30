import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ISvgStylesProps, svgProps } from 'src/styled/props';
import * as SVG from './svg';

/**
 * Styled Containers
 */

export const AccordionContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  transform-origin: top center;
`;

export const AccordionRow = styled.div`
  display: flex;
  justify-content: center;
  height: 80px;
  margin-bottom: 20px;
  overflow: hidden;
`;

export const AccordionSvg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 6em;

  @media screen and (min-width: 1000px) {
    width: 5em;
  }
`;

export const HeaderMotion = styled(motion.header)`
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

export const SectionMotion = styled(motion.section)`
  overflow: hidden;
`;

export const CaretMotion = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.section`
  width: clamp(50%, 500px, 90%);
`;

export const MainContainer = styled.main`
  padding-right: 5vw;
  padding-left: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/**
 * Styled Text
 */

export const AccBody = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.05em;
  color: #ffffff;
  @media screen and (max-width: 600px) {
    width: 200px;
  }
`;

export const AccHeader = styled.h1`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: #ffffff;
`;

export const AccTitle = styled.h2`
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.05em;
  color: #ffffff;
  margin-bottom: 10px;
`;

/**
 * Styled SVG
 */

export const StyledCaretRight = styled(SVG.CaretRight)`
  ${(props: ISvgStylesProps) => svgProps(props)}
`;

export const StyledPlanet = styled(SVG.Planet)`
  ${(props: ISvgStylesProps) => svgProps(props)}
`;

export const StyledJeep = styled(SVG.Jeep)`
  ${(props: ISvgStylesProps) => svgProps(props)}
`;

export const StyledPaw = styled(SVG.Paw)`
  ${(props: ISvgStylesProps) => svgProps(props)}
`;

export const StyledReact = styled(SVG.React)`
  ${(props: ISvgStylesProps) => svgProps(props)}
`;

export const StyledDatabase = styled(SVG.Database)`
  ${(props: ISvgStylesProps) => svgProps(props)}
`;

export const StyledTypeScript = styled(SVG.TypeScript)`
  ${(props: ISvgStylesProps) => svgProps(props)}
`;

export const StyledUser = styled(SVG.User)`
  ${(props: ISvgStylesProps) => svgProps(props)}
`;

export const StyledTeam = styled(SVG.Team)`
  ${(props: ISvgStylesProps) => svgProps(props)}
`;

export const StyledTest = styled(SVG.Test)`
  ${(props: ISvgStylesProps) => svgProps(props)}
`;
