import { css } from 'styled-components';

export interface ISvgStylesProps {
  readonly height?: string;
  readonly width?: string;
  readonly color?: string;
  readonly stroke?: string;
  readonly hoverColor?: string;
  readonly hoverStroke?: string;
}

export const svgProps = ({
  width,
  height,
  color,
  hoverColor,
  stroke,
  hoverStroke,
}: ISvgStylesProps) => {
  return css`
    height: ${height || '100%'};
    width: ${width || '100%'};

    & path {
      fill: ${color || '#414141'};
      stroke: ${stroke || '#414141'};
    }
    &:hover path {
      fill: ${hoverColor || ''};
      stroke: ${hoverStroke || ''};
    }
  `;
};
