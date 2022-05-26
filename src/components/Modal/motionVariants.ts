import { Variants } from 'framer-motion';

export const popUp: Variants = {
  hidden: {
    y: '100vh',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

export const popRight: Variants = {
  hidden: {
    x: '100vh',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    x: '100vh',
    opacity: 0,
  },
};
