import {
  Header,
  Title,
  Details,
  AccBody,
  AccTitle,
  AccHeader,
} from '../styled/Text';
import { AnimatePresence, motion } from 'framer-motion';
import {
  AccordionContainer,
  AccordionRow,
  GreySection,
  AccordionSvg,
  Container,
} from 'src/styled/Containers';
import { useState } from 'react';
import styles from '../../styles/About.module.css';
import {
  CaretRight,
  Database,
  Jeep,
  Paw,
  Planet,
  React,
  Team,
  Test,
  TypeScript,
  User,
} from 'src/svg';

interface IAccordionProps {
  section: any;
  expanded: boolean | number;
  setExpanded: any;
}

interface IContent {
  svg: any;
  title: string;
  body: string;
}

interface IAccordionSection {
  content: IContent[];
}

const AccordionSection = ({ content }: IAccordionSection) => {
  return (
    <AccordionContainer
      variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
      transition={{ duration: 0.8 }}
      className="content-placeholder"
    >
      {content.map((content: IContent, index: number) => (
        <AccordionRow key={index}>
          <AccordionSvg>{content.svg}</AccordionSvg>
          <article>
            <AccTitle>{content.title}</AccTitle>
            <AccBody>{content.body}</AccBody>
          </article>
        </AccordionRow>
      ))}
    </AccordionContainer>
  );
};

const content = {
  leisure: [
    {
      svg: <Planet />,
      title: 'stargazing',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum eu facilisis.',
    },
    {
      svg: <Jeep />,
      title: 'roadtrips',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum eu facilisis.',
    },
    {
      svg: <Paw />,
      title: 'cornelis',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum eu facilisis.',
    },
  ],
  skills: [
    {
      svg: <TypeScript />,
      title: 'languages',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum eu facilisis.',
    },
    {
      svg: <React />,
      title: 'frontend',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum eu facilisis.',
    },
    {
      svg: <Database />,
      title: 'backend',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum eu facilisis.',
    },
  ],
  dev: [
    {
      svg: <Test />,
      title: 'tdd',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum eu facilisis.',
    },
    {
      svg: <Team />,
      title: 'team',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum eu facilisis.',
    },
    {
      svg: <User />,
      title: 'user first',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum eu facilisis.',
    },
  ],
};

const accordionJSX = [
  {
    id: 0,
    header: 'LEISURE',
    jsx: <AccordionSection content={content.leisure} />,
  },
  {
    id: 1,
    header: 'SKILLS',
    jsx: <AccordionSection content={content.skills} />,
  },
  {
    id: 2,
    header: 'DEV VALUES',
    jsx: <AccordionSection content={content.dev} />,
  },
];

const AboutSections = () => {
  const [expanded, setExpanded] = useState<false | number>(0);
  return (
    <>
      {accordionJSX.map((sec, index) => (
        <Accordion
          key={index}
          section={sec}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      ))}
    </>
  );
};

const Accordion = ({ section, expanded, setExpanded }: IAccordionProps) => {
  const isOpen = section.id === expanded;
  return (
    <Container>
      <motion.header
        initial={false}
        animate={{ backgroundColor: isOpen ? '#606060' : '#3F3F3F' }}
        onClick={() => setExpanded(isOpen ? false : section.id)}
        className={styles.header}
      >
        <AccHeader>{section.header}</AccHeader>
        <motion.div
          initial={false}
          className={styles.caretContainer}
          animate={{
            rotate: isOpen ? 90 : 0,
          }}
        >
          <CaretRight className={styles.caret} />
        </motion.div>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            className={styles.section}
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {section.jsx}
          </motion.section>
        )}
      </AnimatePresence>
    </Container>
  );
};

const About = () => {
  return (
    <GreySection id="about">
      <Header>
        <Title>ABOUT</Title>
        <Details>Who is Alexander?</Details>
      </Header>
      <AboutSections />
    </GreySection>
  );
};

export default About;
