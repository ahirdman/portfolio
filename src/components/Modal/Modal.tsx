import styles from '../../../styles/Modal.module.scss';
import { IProjectDetails } from 'src/interface';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import Image from 'next/image';
import { Header, Title, Details } from '../Header/styled';
import { ReactNode, useEffect, useRef } from 'react';
import useWindowSize from 'src/utils/hooks';
import * as Variants from './motionVariants';
import * as Styled from './styled';
import * as Svg from './svg';

interface IBackdropProps {
  children: ReactNode;
  onClick: any;
}

const Backdrop = ({ children, onClick }: IBackdropProps) => {
  return (
    <Styled.Backdrop
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </Styled.Backdrop>
  );
};

interface IProjectModalProps {
  handleClose: (modalOpen: boolean) => void;
  project?: IProjectDetails;
}

export const ProjectModal = ({ handleClose, project }: IProjectModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width && size.width < 600) {
      const storedRequestAnimationFrame = window.requestAnimationFrame;

      window.requestAnimationFrame = () => 42;
      if (modalRef.current) {
        disableBodyScroll(modalRef.current);
        window.requestAnimationFrame = storedRequestAnimationFrame;
      }
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  return (
    <Backdrop onClick={handleClose}>
      <Styled.CloseButton>
        <Svg.Close className={styles.close} />
      </Styled.CloseButton>
      <Styled.Modal
        ref={modalRef}
        onClick={e => e.stopPropagation()}
        variants={Variants.popUp}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {project && (
          <>
            <Header>
              <Title grey>{project.title}</Title>
              <Details>{project.details}</Details>
            </Header>
            <Styled.ImageContainer>
              <Image
                src={`https:${project.screenshot.fields.file.url}`}
                alt="project screenshot"
                width={192}
                height={108}
                priority={true}
                layout="responsive"
                style={{ borderRadius: '5px' }}
              />
            </Styled.ImageContainer>
            <Styled.ToolsContainer>
              {project.tools.map((tool: string, index: number) => (
                <Styled.SmallBold key={index}>{tool}</Styled.SmallBold>
              ))}
            </Styled.ToolsContainer>
            <Styled.ModalTitle>WHY</Styled.ModalTitle>
            <Styled.ModalBody>{project.why}</Styled.ModalBody>
            <Styled.ModalTitle>RESULT</Styled.ModalTitle>
            <Styled.ModalBody>{project.result}</Styled.ModalBody>
            <Styled.ModalLinks>
              <Styled.TextLink
                href={project.gitHub}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                github repo
                <Svg.ChevronsRight className={styles.chevron} />
              </Styled.TextLink>
              <Styled.TextLink
                href={project.deployed}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                deployed app
                <Svg.ChevronsRight className={styles.chevron} />
              </Styled.TextLink>
            </Styled.ModalLinks>
          </>
        )}
      </Styled.Modal>
    </Backdrop>
  );
};
