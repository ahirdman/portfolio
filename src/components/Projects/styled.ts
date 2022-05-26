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

export const NoSelection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #f5f4f4;
`;

export const CardContainer = styled.div`
  /* margin-bottom: 1rem; */
  /* margin-left: 25%; */
  letter-spacing: 0.03em;
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
