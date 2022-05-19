import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 90%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 270px;
  height: 50px;
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  z-index: 1;
`;

export { Nav };
