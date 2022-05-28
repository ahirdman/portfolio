import { Variants } from 'framer-motion';

const headerVariants: Variants = {
  offscreen: {
    y: 20,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const headerVariantsSecond: Variants = {
  offscreen: {
    y: 30,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export { headerVariants, headerVariantsSecond };
