import { memo, SVGProps } from 'react';

const Ellipse42Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 309 304' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={154.355} cy={151.845} rx={154.162} ry={151.814} fill='#4CC421' />
    <ellipse cx={154.355} cy={151.845} rx={154.162} ry={151.814} fill='url(#paint0_linear_26_351)' />
    <defs>
      <linearGradient
        id='paint0_linear_26_351'
        x1={-193.449}
        y1={-64.398}
        x2={312.258}
        y2={340.085}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#EAEF08' />
        <stop offset={1} stopColor='#EAEF08' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(Ellipse42Icon);
export { Memo as Ellipse42Icon };
