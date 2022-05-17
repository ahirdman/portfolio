import styled from 'styled-components';

interface ITitle {
  readonly grey?: boolean;
}

const Header = styled.div`
  height: 15vh;
  padding-top: 1rem;
`;

const Title = styled.p<ITitle>`
  font-weight: 700;
  font-size: 36px;
  line-height: 54px;
  letter-spacing: 0.03em;
  text-align: center;
  color: ${props => (props.grey ? '#3f3f3f' : '#ffffff')};
`;

const Details = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #868686;
`;

export { Header, Title, Details };
