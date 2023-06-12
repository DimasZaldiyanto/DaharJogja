import { memo, SVGProps } from 'react';

const VectorAtas2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 83 139' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M82.7033 4.01466C54.2409 14.3439 -2.0355 54.9364 0.557886 134.672'
      stroke='#ABDE12'
      strokeWidth={15}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(VectorAtas2Icon);
export { Memo as VectorAtas2Icon };
