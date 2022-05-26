import { WhiteSection } from 'src/styled/Containers';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import { Header, Title, Details } from '../../styled/Text';
import { AnimatePresence } from 'framer-motion';
import { ProjectModal } from '../Modal/Modal';
import { ICard, IWindow } from 'src/interface';
import { nestArray } from '../../utils';
import { useState } from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';
import useWindowSize from 'src/utils/hooks';
import * as Svg from './svg';
import * as Styled from './styled';

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
      <Styled.CardContainer
        onClick={() => {
          setProject(card.ref);
          modalOpen ? setModalOpen(false) : setModalOpen(true);
        }}
      >
        <Styled.CardTitle>{card.title}</Styled.CardTitle>
        <Styled.CardDescription>{card.type}</Styled.CardDescription>
        <Image
          src={`https:${card.image}`}
          width={200}
          height={200}
          style={{ borderRadius: '5px' }}
        />
      </Styled.CardContainer>
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
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={size.width && size.width < 600 ? 145 : 200}
      totalSlides={nestedCards.length}
      visibleSlides={size.width && size.width < 600 ? 1 : 2}
      lockOnWindowScroll={true}
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
  );
};

interface IProjectProps {
  cards: ICard[];
  modalOpen: boolean;
  setModalOpen: (modalOpen: boolean) => void;
}

const Projects = ({ cards, modalOpen, setModalOpen }: IProjectProps) => {
  const [project, setProject] = useState();
  const size: IWindow = useWindowSize();

  if (size.width && size.width < 600) {
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
  } else {
    return (
      <WhiteSection id="projects" style={{ display: 'flex' }}>
        <Styled.SplitSection>
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
        </Styled.SplitSection>
        <Styled.SplitSection>
          <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
            onExitComplete={() => null}
          >
            {project && modalOpen ? (
              <ProjectModal
                project={project}
                handleClose={() => setModalOpen(false)}
              />
            ) : (
              <Styled.NoSelection>
                <Svg.Magnifier />
                <br />
                <p>Select a project to view details!</p>
              </Styled.NoSelection>
            )}
          </AnimatePresence>
        </Styled.SplitSection>
      </WhiteSection>
    );
  }
};

export default Projects;
