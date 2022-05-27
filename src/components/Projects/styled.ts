import styled from 'styled-components';

/**
 * Styled Containers
 */

export const SplitSection = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 50vw;
`;

export const CardContainer = styled.div`
  letter-spacing: 0.03em;
`;

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

/**
 * Styled Text
 */

export const CardTitle = styled.h1`
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  color: #000000;
`;

export const CardDescription = styled.h2`
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 5px;
  color: #626262;
`;
