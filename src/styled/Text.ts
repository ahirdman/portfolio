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

const HeroTitle = styled(Title)`
  text-align: left;
  padding-top: 0;
  line-height: 2.5rem;
`;

const HeroBody = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.05em;
  color: #ffffff;
`;

const Details = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #868686;
`;

const VerticalTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #ffffff;
  writing-mode: tb-rl;
  transform: rotate(-180deg);
`;

const BodyText = styled.p`
  width: 270px;
  height: 250px;
  padding-left: 40px;
  margin-left: 30px;
  border-left: 1px solid #ffffff;
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  text-align: justify;
  letter-spacing: 0.05em;
  color: #d3d3d3;
`;

const ModalTitle = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.03em;
  color: #000000;
  text-align: left;
  width: 90vw;
`;

const ModalBody = styled.p`
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.03em;
  width: 90vw;
  color: #000000;
  text-align: left;
  margin-bottom: 2rem;
`;

const CardTitle = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  color: #000000;
`;

const CardDescription = styled.p`
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 5px;
`;

const NavLink = styled.p`
  font-weight: 700;
  font-size: 12px;
  color: white;
  line-height: 15px;

  &:hover {
    cursor: pointer;
  }
`;

const SmallBold = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.03em;
  margin-right: 5px;
  margin-left: 5px;
  color: #9e9e9e;
`;

const TextLink = styled.a`
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.03em;
  color: #000000;
  display: flex;
  align-items: center;
`;

const AccBody = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.05em;
  color: #ffffff;
  width: 200px;
`;

const AccTitle = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.05em;
  color: #ffffff;
  margin-bottom: 10px;
`;

const AccHeader = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: #ffffff;
`;

export {
  Header,
  Title,
  Details,
  VerticalTitle,
  BodyText,
  ModalTitle,
  ModalBody,
  CardTitle,
  CardDescription,
  NavLink,
  HeroTitle,
  HeroBody,
  SmallBold,
  TextLink,
  AccBody,
  AccTitle,
  AccHeader,
};
