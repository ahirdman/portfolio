import { experienceContent } from 'src/components/Experience/content';
import { WhiteSection } from '../../styled/Containers';
import { IExpCard } from 'src/interface';
import * as s from './styled';
import Header from '../Header/Header';
import { highlight } from 'src/styled/colors';

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <>
      <s.Links>
        <s.SvgLink as="a" href="mailto: hirdman.alex@icloud.com">
          <s.StyledMail
            width="30px"
            height="30px"
            stroke="none"
            hoverColor={highlight}
          />
        </s.SvgLink>
        <s.SvgLink
          as="a"
          href="https://www.linkedin.com/in/hirdman/"
          target="_blank"
          rel="noreferrer"
        >
          <s.StyledLinkedIn
            width="30px"
            height="30px"
            stroke="none"
            hoverColor={highlight}
          />
        </s.SvgLink>
        <s.SvgLink
          as="a"
          href="https://github.com/ahirdman"
          target="_blank"
          rel="noreferrer"
        >
          <s.StyledGithub
            width="30px"
            height="30px"
            stroke="none"
            hoverColor={highlight}
          />
        </s.SvgLink>
      </s.Links>
      <s.Footer>
        <s.Small aligned>
          Built with <s.StyledNextJs width="auto" height="12px" />
        </s.Small>
        <s.Small>&copy; Copyright {currentYear}, Alexander Hirdman</s.Small>
        <s.Small>
          Found an issue with this page?{' '}
          <a
            href="https://github.com/ahirdman/portfolio"
            target="_blank"
            rel="noreferrer"
          >
            <s.StyledStrong>Fix it on GitHub</s.StyledStrong>
          </a>
        </s.Small>
      </s.Footer>
    </>
  );
};

const Experience = () => {
  return (
    <WhiteSection id="Experience">
      <Header
        title="EXPERIENCE"
        description="Some of my experience"
        grey={true}
      />
      <s.Wrapper>
        <s.Container>
          <s.StyledLineArrow width="50px" color="black" />
          <s.Card>
            {experienceContent.map((card: IExpCard, index: number) => (
              <article key={index}>
                <s.Title>{card.title}</s.Title>
                <s.Header>{card.header}</s.Header>
                <s.Body>{card.body}</s.Body>
                <s.Details>{card.location}</s.Details>
              </article>
            ))}
          </s.Card>
        </s.Container>
      </s.Wrapper>
      <Footer />
    </WhiteSection>
  );
};

export default Experience;
