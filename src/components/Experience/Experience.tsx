import styles from '../../../styles/Experience.module.scss';
import { Header, Title, Details } from '../../styled/Text';
import { experienceContent } from 'src/contentful/local';
import { WhiteSection } from '../../styled/Containers';
import { IExpCard } from 'src/interface';
import * as svg from './svg';
import * as experience from './styled';

const Experience = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <WhiteSection id="experience" flex centered>
      <Header>
        <Title grey>Experience</Title>
        <Details>Some of my experience</Details>
      </Header>
      <experience.Container>
        <svg.LineArrow className={styles.arrow} />
        <experience.Card>
          {experienceContent.map((card: IExpCard, index: number) => (
            <div key={index}>
              <h1 className={styles.title}>{card.title}</h1>
              <h2 className={styles.header}>{card.header}</h2>
              <p className={styles.body}>{card.body}</p>
              <p className={styles.location}>{card.location}</p>
            </div>
          ))}
        </experience.Card>
      </experience.Container>
      <div className={styles.links}>
        <a href="mailto: hirdman.alex@icloud.com" className={styles.svg}>
          <svg.Mail />
        </a>
        <a
          href="https://www.linkedin.com/in/hirdman/"
          target="_blank"
          rel="noreferrer"
          className={styles.svg}
        >
          <svg.LinkedIn fill="#3f3f3f" />
        </a>
        <a
          href="https://github.com/ahirdman"
          target="_blank"
          rel="noreferrer"
          className={styles.svg}
        >
          <svg.Github fill="#3f3f3f" />
        </a>
      </div>
      <experience.Footer>
        <experience.Small>
          &copy; Copyright {currentYear}, Alexander Hirdman
        </experience.Small>
      </experience.Footer>
    </WhiteSection>
  );
};

export default Experience;
