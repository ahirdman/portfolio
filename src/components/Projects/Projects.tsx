import { WhiteSection } from 'src/styled/Containers';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import { AnimatePresence } from 'framer-motion';
import { ProjectModal } from '../Modal/Modal';
import { ICard, IWindow } from 'src/interface';
import { nestArray } from '../../utils';
import { useState } from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';
import useWindowSize from 'src/utils/hooks';
import * as s from './styled';
import Header from '../Header/Header';

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
      <s.CardContainer
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setProject(card.ref);
          modalOpen ? setModalOpen(false) : setModalOpen(true);
        }}
      >
        <s.CardTitle>{card.title}</s.CardTitle>
        <s.CardDescription>{card.type}</s.CardDescription>
        <Image
          src={`https:${card.image}`}
          alt="project screenshot"
          width={200}
          height={200}
          style={{ borderRadius: '5px' }}
        />
      </s.CardContainer>
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
  const size: IWindow = useWindowSize();

  return (
    <s.Container>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={size.width && size.width < 600 ? 145 : 100}
        totalSlides={nestedCards.length}
        visibleSlides={size.width && size.width < 600 ? 1 : 2}
        lockOnWindowScroll={true}
        isIntrinsicHeight={true}
      >
        {size.width && size.width < 600 && (
          <DotGroup showAsSelectedForCurrentSlideOnly={true} />
        )}
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
    </s.Container>
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
      <Header title="PROJECTS" description="Some of my work" grey={true} />
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
