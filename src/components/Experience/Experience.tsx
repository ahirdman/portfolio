import styles from '../../../styles/Experience.module.scss';
import { Header, Title, Details } from '../../styled/Text';
import { WhiteSection } from '../../styled/Containers';
import { IExpCard } from 'src/interface';
import * as Svg from './svg';
import * as Styled from './styled';

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
        <Svg.LineArrow className={styles.arrow} />
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
          <Svg.Mail />
        </a>
        <a
          href="https://www.linkedin.com/in/hirdman/"
          target="_blank"
          rel="noreferrer"
          className={styles.svg}
        >
          <Svg.LinkedIn fill="#3f3f3f" />
        </a>
        <a
          href="https://github.com/ahirdman"
          target="_blank"
          rel="noreferrer"
          className={styles.svg}
        >
          <Svg.Github fill="#3f3f3f" />
        </a>
      </div>
      <Styled.Footer>
        <Styled.Small>
          &copy; Copyright {currentYear}, Alexander Hirdman
        </Styled.Small>
      </Styled.Footer>
    </WhiteSection>
  );
};

export default Experience;
