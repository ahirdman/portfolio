import ProjectCard from './ProjectCard';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { ICard } from 'src/interface';
import { nestArray } from '../utils';

interface ICarouselProps {
  modalOpen: boolean;
  setModalOpen: any;
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
  console.log(nestedCards);
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={190}
      totalSlides={nestedCards.length}
      visibleSlides={1.5}
      lockOnWindowScroll={true}
    >
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
      <DotGroup showAsSelectedForCurrentSlideOnly={true} />
    </CarouselProvider>
  );
};

export default Carousel;
