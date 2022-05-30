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
      duration: 1,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};
