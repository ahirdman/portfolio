import { ISVGProps } from 'src/interface';

export const Magnifier = ({ className }: ISVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="70"
    height="70"
    fill="none"
    viewBox="0 0 70 70"
  >
    <path
      stroke="#868686"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      d="M31.333 60.667c16.2 0 29.334-13.133 29.334-29.334C60.667 15.133 47.534 2 31.333 2 15.133 2 2 15.133 2 31.333s13.133 29.334 29.333 29.334ZM68 68 52.05 52.05"
    />
  </svg>
);
