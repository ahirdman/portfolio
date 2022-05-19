import Image from 'next/image';
import { ICard } from 'src/interface';
import { CardContainer } from 'src/styled/Containers';
import { CardDescription, CardTitle } from 'src/styled/Text';

interface IProjectCardProps {
  modalOpen: boolean;
  setModalOpen: any;
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
        width={220}
        height={200}
        style={{ borderRadius: '5px' }}
      />
    </CardContainer>
  );
};

export default ProjectCard;
