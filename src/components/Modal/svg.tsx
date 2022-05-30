import { ISVGProps } from 'src/interface';
import { motion } from 'framer-motion';

export const Close = ({ className }: ISVGProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="m1 1 16.111 16.111M17.111 1 1 17.111" />
  </motion.svg>
);

export const ChevronsRight = ({ className }: ISVGProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M9.208 12.042 12.75 8.5 9.208 4.958M4.25 12.042 7.792 8.5 4.25 4.958"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
);
