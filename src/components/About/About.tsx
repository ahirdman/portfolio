import { AnimatePresence } from 'framer-motion';
import { GreySection } from 'src/styled/Containers';
import { ReactNode, useState } from 'react';
import Header from '../Header/Header';
import * as s from './styled';

interface IAccordionSectionProps {
  content: IContent[];
}

const AccordionSection = ({ content }: IAccordionSectionProps) => {
  return (
    <s.AccordionContainer
      variants={{ collapsed: { scale: 1 }, open: { scale: 1 } }}
      transition={{ duration: 0.8 }}
    >
      {content.map((content: IContent, index: number) => (
        <s.AccordionRow key={index}>
          <s.AccordionSvg>{content.svg}</s.AccordionSvg>
          <article>
            <s.AccTitle>{content.title}</s.AccTitle>
            <s.AccBody>{content.body}</s.AccBody>
          </article>
        </s.AccordionRow>
      ))}
    </s.AccordionContainer>
  );
};

interface IContent {
  svg: ReactNode;
  title: string;
  body: string;
}

const content = {
  leisure: [
    {
      svg: <s.StyledPlanet />,
      title: 'stargazing',
      body: 'Space is my muse. Nothing beats a dark sky on a clear night. It humbles and inspires me. ',
    },
    {
      svg: <s.StyledJeep />,
      title: 'roadtrips',
      body: 'I love driving and exploring new places. During covid, I would frequently load my car with camping gear and hit the road.',
    },
    {
      svg: <s.StyledPaw />,
      title: 'cornelis',
      body: 'My Old English Bulldog, the best four-legged companion I could ask for. He loves running in the woods and swallowing my socks.',
    },
  ],
  skills: [
    {
      svg: <s.StyledTypeScript />,
      title: 'languages',
      body: 'JavaScript & TypeScript. I learned the bare basics of programming with Swift. I will continue learning Swift in the future.',
    },
    {
      svg: <s.StyledReact />,
      title: 'frontend',
      body: 'React, Redux, Next.js, HTML, CSS, SASS, Styled Components, Framer Motion',
    },
    {
      svg: <s.StyledDatabase />,
      title: 'backend',
      body: 'Node.js, Express, REST, NoSql, SQL, Docker, Firebase',
    },
  ],
  dev: [
    {
      svg: <s.StyledTest />,
      title: 'tdd',
      body: 'Writing good tests helps me sleep better at night. I use mocha, jest, and postman in my projects.',
    },
    {
      svg: <s.StyledTeam />,
      title: 'team',
      body: 'If you want to go fast, go alone. If you want to go far, go together.',
    },
    {
      svg: <s.StyledUser />,
      title: 'user first',
      body: 'We create applications for users, not computers. I try to keep that in mind at all times and prioritize accordingly.',
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

interface ISection {
  id: number;
  header: string;
  jsx: ReactNode;
}

interface IAccordionProps {
  section: ISection;
  expanded: false | number;
  setExpanded: (expanded: false | number) => void;
}

const Accordion = ({ section, expanded, setExpanded }: IAccordionProps) => {
  const isOpen = section.id === expanded;
  return (
    <s.Container>
      <s.HeaderMotion
        initial={false}
        animate={{
          backgroundColor: isOpen ? '#606060' : '#3F3F3F',
        }}
        onClick={() => setExpanded(isOpen ? false : section.id)}
        whileHover={{
          backgroundColor: '#4b4b4b',
        }}
      >
        <s.AccHeader>{section.header}</s.AccHeader>
        <s.CaretMotion
          initial={false}
          animate={{
            rotate: isOpen ? 90 : 0,
          }}
        >
          <s.StyledCaretRight />
        </s.CaretMotion>
      </s.HeaderMotion>
      <AnimatePresence initial={false}>
        {isOpen && (
          <s.SectionMotion
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {section.jsx}
          </s.SectionMotion>
        )}
      </AnimatePresence>
    </s.Container>
  );
};

interface IAboutSectionsProps {
  expanded: false | number;
  setExpanded: (expanded: false | number) => void;
}

const AboutSections = ({ expanded, setExpanded }: IAboutSectionsProps) => {
  return (
    <s.MainContainer>
      {accordionJSX.map((sec, index) => (
        <Accordion
          key={index}
          section={sec}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      ))}
    </s.MainContainer>
  );
};

const About = () => {
  const [expanded, setExpanded] = useState<false | number>(0);
  return (
    <GreySection id="About">
      <Header title="ABOUT" description="Who is Alexander?" />
      <AboutSections expanded={expanded} setExpanded={setExpanded} />
    </GreySection>
  );
};

export default About;
