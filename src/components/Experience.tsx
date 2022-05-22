import { Centered, WhiteSection } from '../styled/Containers';
import { Header, Title, Details } from '../styled/Text';
import { Github, LineArrow, LinkedIn, Mail } from '../svg';
import styles from '../../styles/Experience.module.css';

const Experience = () => {
  return (
    <WhiteSection id="experience">
      <Header>
        <Title grey>Experience</Title>
        <Details>Some of my experience</Details>
      </Header>
      <div className={styles.container}>
        <LineArrow />
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <h1 className={styles.place}>Santa Monica College</h1>
            <h2 className={styles.header}>Design, Film Iconography</h2>
            <p className={styles.body}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
              id euismod dignissim mauris. Ornare ullamcorper sed.
            </p>
            <p className={styles.body}>
              Stockholm, Sweden - Jan 2012 - Mars 2012
            </p>
          </div>
          <div className={styles.card}>
            <h1 className={styles.place}>Santa Monica College</h1>
            <h2 className={styles.header}>Design, Film Iconography</h2>
            <p className={styles.body}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
              id euismod dignissim mauris. Ornare ullamcorper sed.
            </p>
            <p className={styles.body}>
              Stockholm, Sweden - Jan 2012 - Mars 2012
            </p>
          </div>
          <div className={styles.card}>
            <h1 className={styles.place}>Santa Monica College</h1>
            <h2 className={styles.header}>Design, Film Iconography</h2>
            <p className={styles.body}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
              id euismod dignissim mauris. Ornare ullamcorper sed.
            </p>
            <p className={styles.body}>
              Stockholm, Sweden - Jan 2012 - Mars 2012
            </p>
          </div>
        </div>
      </div>
      <div className={styles.links}>
        <a
          href="https://www.linkedin.com/in/hirdman/"
          target="_blank"
          rel="noreferrer"
          className={styles.svg}
        >
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
    </WhiteSection>
  );
};

export default Experience;
