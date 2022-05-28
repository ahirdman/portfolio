import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import * as SVG from './svg';

/**
 * Styled Containers
 */

export const Container = styled.main`
  display: flex;
  justify-content: center;
  padding-right: 2rem;
  padding-left: 2rem;
  margin-bottom: 5vh;
  height: 55vh;
  width: clamp(50%, 500px, 90%);
`;

export const Card = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  margin-left: 5vw;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;
`;

export const SvgLink = styled(motion.div)`
  margin: 10px;
  /* 
  &:hover {
    cursor: pointer;
  } */
`;

/**
 * Styled Text
 */

export const Small = styled.small`
  font-weight: 400;
  font-size: 8px;
  line-height: 18px;
  letter-spacing: 0.05em;
  color: #ababab;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
  margin-bottom: 5px;
`;

export const Header = styled.h2`
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #626262;
  margin-bottom: 5px;
`;

export const Body = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
  margin-bottom: 5px;
`;

export const Details = styled.p`
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  color: #ababab;
`;

/**
 * Styled SVG
 */

interface ISvgStylesProps {
  readonly height?: string;
  readonly width?: string;
  readonly color?: string;
  readonly hoverColor?: string;
}

const svgStyles = ({ height, width, color, hoverColor }: ISvgStylesProps) => {
  return css`
    height: ${height || '100%'};
    width: ${width || '100%'};

    & path {
      fill: ${color || '#414141'};
    }
    &:hover path {
      fill: ${hoverColor || ''};
    }
  `;
};

export const StyledLineArrow = styled(SVG.LineArrow)`
  ${(props: ISvgStylesProps) => svgStyles(props)}
`;

export const StyledMail = styled(SVG.Mail)`
  ${(props: ISvgStylesProps) => svgStyles(props)}
`;

export const StyledLinkedIn = styled(SVG.LinkedIn)`
  ${(props: ISvgStylesProps) => svgStyles(props)}
`;

export const StyledGithub = styled(SVG.Github)`
  ${(props: ISvgStylesProps) => svgStyles(props)}
`;
