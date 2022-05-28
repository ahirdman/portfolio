import { AnimatePresence } from 'framer-motion';
import { GreySection } from 'src/styled/Containers';
import { ReactNode, useState } from 'react';
import * as svg from './svg';
import * as about from './styled';
import Header from '../Header/Header';

interface IContent {
  svg: ReactNode;
  title: string;
  body: string;
}

interface IAccordionSectionProps {
  content: IContent[];
}

const AccordionSection = ({ content }: IAccordionSectionProps) => {
  return (
    <about.AccordionContainer
      variants={{ collapsed: { scale: 1 }, open: { scale: 1 } }}
      transition={{ duration: 0.8 }}
    >
      {content.map((content: IContent, index: number) => (
        <about.AccordionRow key={index}>
          <about.AccordionSvg>{content.svg}</about.AccordionSvg>
          <article>
            <about.AccTitle>{content.title}</about.AccTitle>
            <about.AccBody>{content.body}</about.AccBody>
          </article>
        </about.AccordionRow>
      ))}
    </about.AccordionContainer>
  );
};

const content = {
  leisure: [
    {
      svg: <svg.Planet />,
      title: 'stargazing',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum eu facilisis.',
    },
    {
      svg: <svg.Jeep />,
      title: 'roadtrips',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum eu facilisis.',
    },
    {
      svg: <svg.Paw />,
      title: 'cornelis',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum eu facilisis.',
    },
  ],
  skills: [
    {
      svg: <svg.TypeScript />,
      title: 'languages',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum eu facilisis.',
    },
    {
      svg: <svg.React />,
      title: 'frontend',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum eu facilisis.',
    },
    {
      svg: <svg.Database />,
      title: 'backend',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum eu facilisis.',
    },
  ],
  dev: [
    {
      svg: <svg.Test />,
      title: 'tdd',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum eu facilisis.',
    },
    {
      svg: <svg.Team />,
      title: 'team',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum eu facilisis.',
    },
    {
      svg: <svg.User />,
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
    <about.Container>
      <about.HeaderMotion
        initial={false}
        animate={{ backgroundColor: isOpen ? '#606060' : '#3F3F3F' }}
        onClick={() => setExpanded(isOpen ? false : section.id)}
      >
        <about.AccHeader>{section.header}</about.AccHeader>
        <about.CaretMotion
          initial={false}
          animate={{
            rotate: isOpen ? 90 : 0,
          }}
        >
          <svg.CaretRight />
        </about.CaretMotion>
      </about.HeaderMotion>
      <AnimatePresence initial={false}>
        {isOpen && (
          <about.SectionMotion
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
          </about.SectionMotion>
        )}
      </AnimatePresence>
    </about.Container>
  );
};

interface IAboutSectionsProps {
  expanded: false | number;
  setExpanded: (expanded: false | number) => void;
}

const AboutSections = ({ expanded, setExpanded }: IAboutSectionsProps) => {
  return (
    <about.MainContainer>
      {accordionJSX.map((sec, index) => (
        <Accordion
          key={index}
          section={sec}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      ))}
    </about.MainContainer>
  );
};

const About = () => {
  const [expanded, setExpanded] = useState<false | number>(0);
  return (
    <GreySection id="about">
      <Header title="ABOUT" />
      <AboutSections expanded={expanded} setExpanded={setExpanded} />
    </GreySection>
  );
};

export default About;
