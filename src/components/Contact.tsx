import { Centered, WhiteSection } from '../styled/Containers';
import { Header, Title, Details } from '../styled/Text';
import { Github, LinkedIn } from '../svg';
import styles from '../../styles/Contact.module.css';

const Contact = () => {
  return (
    <WhiteSection id="contact">
      <Header>
        <Title grey>CONTACT</Title>
        <Details>Get in touch</Details>
      </Header>
      <Centered>
        <a href="https://github.com/ahirdman" target="_blank" rel="noreferrer">
          <Github fill="#3f3f3f" className={styles.svg} />
        </a>
        <a
          href="https://www.linkedin.com/in/hirdman/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn fill="#3f3f3f" className={styles.svg} />
        </a>
      </Centered>
    </WhiteSection>
  );
};

export default Contact;
