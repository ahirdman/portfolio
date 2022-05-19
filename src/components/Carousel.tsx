import ProjectCard from './ProjectCard';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { ICard } from 'src/interface';

interface ICarouselProps {
  modalOpen: boolean;
  setModalOpen: any;
  cards: ICard[];
}

const Carousel = ({ modalOpen, setModalOpen, cards }: ICarouselProps) => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={100}
      totalSlides={cards.length}
      visibleSlides={1}
      lockOnWindowScroll={true}
    >
      <Slider>
        {cards.map((card: ICard, index: number) => (
          <Slide index={index} key={card.id}>
            <ProjectCard
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              card={card}
            />
          </Slide>
        ))}
      </Slider>
      <DotGroup showAsSelectedForCurrentSlideOnly={true} />
    </CarouselProvider>
  );
};

export default Carousel;
