import { AnimatePresence } from 'framer-motion';
import { GreySection } from 'src/styled/Containers';
import { ReactNode, useState } from 'react';
import { Header, Title, Details } from '../../styled/Text';
import * as Svg from './svg';
import * as Styled from './styled';

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
    <Styled.AccordionContainer
      variants={{ collapsed: { scale: 1 }, open: { scale: 1 } }}
      transition={{ duration: 0.8 }}
    >
      {content.map((content: IContent, index: number) => (
        <Styled.AccordionRow key={index}>
          <Styled.AccordionSvg>{content.svg}</Styled.AccordionSvg>
          <article>
            <Styled.AccTitle>{content.title}</Styled.AccTitle>
            <Styled.AccBody>{content.body}</Styled.AccBody>
          </article>
        </Styled.AccordionRow>
      ))}
    </Styled.AccordionContainer>
  );
};

const content = {
  leisure: [
    {
      svg: <Svg.Planet />,
      title: 'stargazing',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum eu facilisis.',
    },
    {
      svg: <Svg.Jeep />,
      title: 'roadtrips',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum eu facilisis.',
    },
    {
      svg: <Svg.Paw />,
      title: 'cornelis',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum eu facilisis.',
    },
  ],
  skills: [
    {
      svg: <Svg.TypeScript />,
      title: 'languages',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum eu facilisis.',
    },
    {
      svg: <Svg.React />,
      title: 'frontend',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum eu facilisis.',
    },
    {
      svg: <Svg.Database />,
      title: 'backend',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum eu facilisis.',
    },
  ],
  dev: [
    {
      svg: <Svg.Test />,
      title: 'tdd',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum eu facilisis.',
    },
    {
      svg: <Svg.Team />,
      title: 'team',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum eu facilisis.',
    },
    {
      svg: <Svg.User />,
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
    <Styled.Container>
      <Styled.HeaderMotion
        initial={false}
        animate={{ backgroundColor: isOpen ? '#606060' : '#3F3F3F' }}
        onClick={() => setExpanded(isOpen ? false : section.id)}
      >
        <Styled.AccHeader>{section.header}</Styled.AccHeader>
        <Styled.CenteredMotion
          initial={false}
          animate={{
            rotate: isOpen ? 90 : 0,
          }}
        >
          <Svg.CaretRight />
        </Styled.CenteredMotion>
      </Styled.HeaderMotion>
      <AnimatePresence initial={false}>
        {isOpen && (
          <Styled.SectionMotion
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
          </Styled.SectionMotion>
        )}
      </AnimatePresence>
    </Styled.Container>
  );
};

interface IAboutSectionsProps {
  expanded: false | number;
  setExpanded: (expanded: false | number) => void;
}

const AboutSections = ({ expanded, setExpanded }: IAboutSectionsProps) => {
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

const About = () => {
  const [expanded, setExpanded] = useState<false | number>(0);
  return (
    <GreySection id="about">
      <Header>
        <Title>ABOUT</Title>
        <Details>Who is Alexander?</Details>
      </Header>
      <AboutSections expanded={expanded} setExpanded={setExpanded} />
    </GreySection>
  );
};

export default About;
