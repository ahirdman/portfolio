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

const Column = styled.div`
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
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

const HeroImage = styled.div`
  width: 100%;
  height: 15vh;
  object-fit: cover;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(63, 63, 63, 0.5) 51.56%,
      #3f3f3f 100%
    ),
    url(/images/hero.jpg);
`;

const BDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #000000e1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalTitle = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.03em;
  color: #000000;
  text-align: left;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 5px;
`;

const ModalBody = styled.p`
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.03em;
  color: #000000;
`;

export {
  Header,
  Title,
  Details,
  Column,
  VerticalTitle,
  Row,
  BodyText,
  HeroImage,
  BDrop,
  ModalTitle,
  ModalBody,
};
