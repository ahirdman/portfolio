import { ISVGProps } from 'src/interface';

export const Close = ({ className }: ISVGProps) => (
  <svg
    width="18"
    height="18"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m1 1 16.111 16.111M17.111 1 1 17.111"
      className={className}
      stroke="#B8B8B8"
    />
  </svg>
);

export const ChevronsRight = ({ className }: ISVGProps) => (
  <svg width="17" height="17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.208 12.042 12.75 8.5 9.208 4.958M4.25 12.042 7.792 8.5 4.25 4.958"
      stroke="#000"
      className={className}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
