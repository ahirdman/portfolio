import { motion } from 'framer-motion';
import { ISvgStylesProps, svgProps } from 'src/styled/props';
import styled from 'styled-components';
import * as SVG from './svg';

interface ISmall {
  readonly aligned?: boolean;
}

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

  @media screen and (max-height: 701px) {
    height: 100vh;
  }
`;

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
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

  @media screen and (max-height: 701px) {
    margin-bottom: 8%;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;
`;

export const SvgLink = styled(motion.div)`
  margin: 10px;
`;

/**
 * Styled Text
 */

export const Small = styled.small<ISmall>`
  font-weight: 400;
  font-size: 8px;
  line-height: 18px;
  letter-spacing: 0.05em;
  color: #ababab;
  display: ${props => (props.aligned ? 'flex' : null)};
  align-items: ${props => (props.aligned ? 'center' : null)};
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

export const StyledStrong = styled.strong`
  &:hover {
    color: #ff8a00;
  }
`;

/**
 * Styled SVG
 */

export const StyledLineArrow = styled(SVG.LineArrow)`
  ${(props: ISvgStylesProps) => svgProps(props)}
`;

export const StyledMail = styled(SVG.Mail)`
  ${(props: ISvgStylesProps) => svgProps(props)}
`;

export const StyledLinkedIn = styled(SVG.LinkedIn)`
  ${(props: ISvgStylesProps) => svgProps(props)}
`;

export const StyledGithub = styled(SVG.Github)`
  ${(props: ISvgStylesProps) => svgProps(props)}
`;

export const StyledNextJs = styled(SVG.NextJs)`
  margin-left: 4px;
  ${(props: ISvgStylesProps) => svgProps(props)}
`;
