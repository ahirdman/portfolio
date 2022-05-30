import { AnimatePresence } from 'framer-motion';
import { GreySection } from 'src/styled/Containers';
import { ReactNode, useState } from 'react';
import * as svg from './svg';
import * as s from './styled';
import Header from '../Header/Header';

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
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum eu facilisis.',
    },
    {
      svg: <s.StyledJeep />,
      title: 'roadtrips',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum eu facilisis.',
    },
    {
      svg: <s.StyledPaw />,
      title: 'cornelis',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum eu facilisis.',
    },
  ],
  skills: [
    {
      svg: <s.StyledTypeScript />,
      title: 'languages',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum eu facilisis.',
    },
    {
      svg: <s.StyledReact />,
      title: 'frontend',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum eu facilisis.',
    },
    {
      svg: <s.StyledDatabase />,
      title: 'backend',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum eu facilisis.',
    },
  ],
  dev: [
    {
      svg: <s.StyledTest />,
      title: 'tdd',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum eu facilisis.',
    },
    {
      svg: <s.StyledTeam />,
      title: 'team',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum eu facilisis.',
    },
    {
      svg: <s.StyledUser />,
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
        animate={{ backgroundColor: isOpen ? '#606060' : '#3F3F3F' }}
        onClick={() => setExpanded(isOpen ? false : section.id)}
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
    <GreySection id="about">
      <Header title="ABOUT" description="Who is Alexander?" />
      <AboutSections expanded={expanded} setExpanded={setExpanded} />
    </GreySection>
  );
};

export default About;
