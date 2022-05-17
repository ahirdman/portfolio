import ProjectCard from './ProjectCard';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Carousel = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={190}
      totalSlides={3}
      visibleSlides={1.5}
      lockOnWindowScroll={true}
    >
      <Slider>
        <Slide index={0}>
          <ProjectCard />
          <ProjectCard />
        </Slide>
        <Slide index={1}>
          <ProjectCard />
          <ProjectCard />
        </Slide>
        <Slide index={2}>
          <ProjectCard />
          <ProjectCard />
        </Slide>
      </Slider>
      <DotGroup showAsSelectedForCurrentSlideOnly={true} />
    </CarouselProvider>
  );
};

export default Carousel;
