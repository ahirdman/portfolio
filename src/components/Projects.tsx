import { CardContainer, WhiteSection } from 'src/styled/Containers';
import { CardDescription, CardTitle } from 'src/styled/Text';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import { Header, Title, Details } from '../styled/Text';
import { AnimatePresence } from 'framer-motion';
import { ProjectModal } from './Modal';
import { ICard } from 'src/interface';
import { nestArray } from '../utils';
import { useState } from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';

interface IProjectCardProps {
  modalOpen: boolean;
  setModalOpen: (modalOpen: boolean) => void;
  card: ICard;
  setProject: any;
}

const ProjectCard = ({
  modalOpen,
  setModalOpen,
  card,
  setProject,
}: IProjectCardProps) => {
  return (
    <Link to="projects" smooth={false} spy={true}>
      <CardContainer
        onClick={() => {
          setProject(card.ref);
          modalOpen ? setModalOpen(false) : setModalOpen(true);
        }}
      >
        <CardTitle>{card.title}</CardTitle>
        <CardDescription>{card.type}</CardDescription>
        <Image
          src={`https:${card.image}`}
          width={200}
          height={200}
          style={{ borderRadius: '5px' }}
        />
      </CardContainer>
    </Link>
  );
};

interface ICarouselProps {
  modalOpen: boolean;
  setModalOpen: (modalOpen: boolean) => void;
  cards: ICard[];
  setProject: any;
}

const Carousel = ({
  modalOpen,
  setModalOpen,
  cards,
  setProject,
}: ICarouselProps) => {
  const nestedCards = nestArray(cards);
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={145}
      totalSlides={nestedCards.length}
      visibleSlides={1}
      lockOnWindowScroll={true}
    >
      <DotGroup showAsSelectedForCurrentSlideOnly={true} />
      <Slider>
        {nestedCards.map((nested: any, index: number) => (
          <Slide index={index} key={index}>
            {nested.map((card: ICard, index: number) => {
              return (
                <ProjectCard
                  key={index}
                  modalOpen={modalOpen}
                  setModalOpen={setModalOpen}
                  card={card}
                  setProject={setProject}
                />
              );
            })}
          </Slide>
        ))}
      </Slider>
    </CarouselProvider>
  );
};

interface IProjectProps {
  cards: ICard[];
  modalOpen: boolean;
  setModalOpen: (modalOpen: boolean) => void;
}

const Projects = ({ cards, modalOpen, setModalOpen }: IProjectProps) => {
  const [project, setProject] = useState();
  return (
    <WhiteSection id="projects">
      <Header>
        <Title grey>PROJECTS</Title>
        <Details>Some of my work</Details>
      </Header>
      <Carousel
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        cards={cards}
        setProject={setProject}
      />
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {project && modalOpen && (
          <ProjectModal
            project={project}
            handleClose={() => setModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </WhiteSection>
  );
};

export default Projects;
