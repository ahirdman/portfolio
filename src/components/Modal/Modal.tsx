import { IProjectDetails } from 'src/interface';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import Image from 'next/image';
import Header from '../Header/Header';
import { ReactNode, useEffect, useRef } from 'react';
import useWindowSize from 'src/utils/hooks';
import * as Variants from './motionVariants';
import * as s from './styled';

interface IBackdropProps {
  children: ReactNode;
  onClick: any;
}

const Backdrop = ({ children, onClick }: IBackdropProps) => {
  return (
    <s.Backdrop
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </s.Backdrop>
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
      <s.StyledClose
        width="18px"
        height="18px"
        hoverStroke="white"
        stroke="#B8B8B8"
      />
      <s.Modal
        ref={modalRef}
        onClick={e => e.stopPropagation()}
        variants={Variants.popUp}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {project && (
          <>
            <Header
              title={project.title}
              description={project.details}
              grey={true}
            />
            <s.ImageContainer>
              <Image
                src={`https:${project.screenshot.fields.file.url}`}
                alt="project screenshot"
                width={192}
                height={108}
                priority={true}
                layout="responsive"
                style={{ borderRadius: '5px' }}
              />
            </s.ImageContainer>
            <s.ToolsContainer>
              {project.tools.map((tool: string, index: number) => (
                <s.SmallBold key={index}>{tool}</s.SmallBold>
              ))}
            </s.ToolsContainer>
            <s.ModalTitle>WHY</s.ModalTitle>
            <s.ModalBody>{project.why}</s.ModalBody>
            <s.ModalTitle>RESULT</s.ModalTitle>
            <s.ModalBody>{project.result}</s.ModalBody>
            <s.ModalLinks>
              <s.TextLink
                href={project.gitHub}
                target="_blank"
                rel="noreferrer"
              >
                github repo
                <s.StyledChevronsRight
                  width="17px"
                  height="17px"
                  stroke="black"
                  color="none"
                />
              </s.TextLink>
              <s.TextLink
                href={project.deployed}
                target="_blank"
                rel="noreferrer"
              >
                deployed app
                <s.StyledChevronsRight
                  width="17px"
                  height="17px"
                  stroke="black"
                  color="none"
                />
              </s.TextLink>
            </s.ModalLinks>
          </>
        )}
      </s.Modal>
    </Backdrop>
  );
};
