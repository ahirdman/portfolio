import { Centered, WhiteSection } from '../styled/Containers';
import { Header, Title, Details } from '../styled/Text';
import styles from '../../styles/Contact.module.css';
import { Github, LinkedIn } from '../assets';

const Contact = () => {
  return (
    <WhiteSection id="contact">
      <Header>
        <Title grey>CONTACT</Title>
        <Details>Get in touch</Details>
      </Header>
      <Centered>
        <a href="https://github.com/ahirdman" target="_blank">
          <Github fill="#3f3f3f" className={styles.svg} />
        </a>
        <a href="https://www.linkedin.com/in/hirdman/" target="_blank">
          <LinkedIn fill="#3f3f3f" className={styles.svg} />
        </a>
      </Centered>
    </WhiteSection>
  );
};

export default Contact;
