import { WhiteSection } from '../styled/Containers';
import { Header, Title, Details, Small } from '../styled/Text';
import { Github, LineArrow, LinkedIn, Mail } from '../svg';
import styles from '../../styles/Experience.module.css';
import { Footer } from 'src/styled/Elements';
import { IExpCard } from 'src/interface';

const content = [
  {
    title: 'SANTA MONICA COLLEGE',
    header: 'Design, Film Iconography',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate id euismod dignissim mauris. Ornare ullamcorper sed.',
    location: 'Los Angeles, USA - 2010',
  },
  {
    title: 'CAP',
    header: 'Agile Project Manager',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate id euismod dignissim mauris. Ornare ullamcorper sed.',
    location: 'Stockholm, Sweden - 2012',
  },
  {
    title: '</SALT>',
    header: 'Full Stack JavaScript Developer',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate id euismod dignissim mauris. Ornare ullamcorper sed.',
    location: 'Stockholm, Sweden - 2022',
  },
];

const Experience = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <WhiteSection id="experience">
      <Header>
        <Title grey>Experience</Title>
        <Details>Some of my experience</Details>
      </Header>
      <div className={styles.container}>
        <LineArrow className={styles.arrow} />
        <div className={styles.cardContainer}>
          {content.map((card: IExpCard, index: number) => (
            <div className={styles.card} key={index}>
              <h1 className={styles.title}>{card.title}</h1>
              <h2 className={styles.header}>{card.header}</h2>
              <p className={styles.body}>{card.body}</p>
              <p className={styles.location}>{card.location}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.links}>
        <a href="mailto: hirdman.alex@icloud.com" className={styles.svg}>
          <Mail />
        </a>
        <a
          href="https://www.linkedin.com/in/hirdman/"
          target="_blank"
          rel="noreferrer"
          className={styles.svg}
        >
          <LinkedIn fill="#3f3f3f" />
        </a>
        <a
          href="https://github.com/ahirdman"
          target="_blank"
          rel="noreferrer"
          className={styles.svg}
        >
          <Github fill="#3f3f3f" />
        </a>
      </div>
      <Footer>
        <Small>&copy; Copyright {currentYear}, Alexander Hirdman</Small>
      </Footer>
    </WhiteSection>
  );
};

export default Experience;
