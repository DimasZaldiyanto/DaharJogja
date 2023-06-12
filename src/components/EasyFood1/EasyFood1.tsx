import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Cewek1Icon } from './Cewek1Icon.js';
import { Cewek2Icon } from './Cewek2Icon.js';
import { Cowo1Icon } from './Cowo1Icon.js';
import classes from './EasyFood1.module.css';
import { Ellipse42Icon } from './Ellipse42Icon.js';
import { Rectangle89Icon } from './Rectangle89Icon.js';
import { Rectangle92Icon } from './Rectangle92Icon.js';
import { Star6Icon } from './Star6Icon.js';
import { VectorAtas1Icon } from './VectorAtas1Icon.js';
import { VectorAtas2Icon } from './VectorAtas2Icon.js';
import { VectorBawah1Icon } from './VectorBawah1Icon.js';
import { VectorBawah2Icon } from './VectorBawah2Icon.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 25:240 */
export const EasyFood1: FC<Props> = memo(function EasyFood1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.findYour}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>Find </span>
          <span className={classes.label2}>Your</span>
        </p>
        <div className={classes.textBlock}>
          <p></p>
        </div>
      </div>
      <div className={classes.logo}>
        <p className={classes.labelWrapper2}>
          <span className={classes.label3}>Easy Food</span>
        </p>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
      </div>
      <div className={classes.discoverUnforgettableCulinaryE}>
        Discover unforgettable culinary experiences with just one click on our culinary recommendation app!
      </div>
      <div className={classes.favoriteFood}>
        <p className={classes.labelWrapper3}>
          <span className={classes.label4}>Favorite </span>
          <span className={classes.label5}>Food</span>
        </p>
      </div>
      <div className={classes.kotakPencarian}></div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
      <div className={classes.rectangle88}></div>
      <div className={classes.signIn}>Sign In</div>
      <div className={classes.rectangle89}>
        <Rectangle89Icon className={classes.icon2} />
      </div>
      <div className={classes.seeRecommend}>See Recommend</div>
      <div className={classes.home}>Home</div>
      <div className={classes.review}>Review</div>
      <div className={classes.likedFoods}>Liked Foods</div>
      <div className={classes.categories}>Categories</div>
      <div className={classes.rectangle92}>
        <Rectangle92Icon className={classes.icon3} />
      </div>
      <div className={classes.ourHappyCostumer}>Our Happy Costumer</div>
      <div className={classes._47107kReview}>4.7 (10.7k Review)</div>
      <div className={classes.cowo1}>
        <Cowo1Icon className={classes.icon4} />
      </div>
      <div className={classes.cewek1}>
        <Cewek1Icon className={classes.icon5} />
      </div>
      <div className={classes.cewek2}>
        <Cewek2Icon className={classes.icon6} />
      </div>
      <div className={classes.star6}>
        <Star6Icon className={classes.icon7} />
      </div>
      <div className={classes.garisBawah}></div>
      <div className={classes.googleplay1}></div>
      <div className={classes.appstore1}></div>
      <div className={classes.startYourJourneyFoodNearYou}>
        <div className={classes.textBlock3}>Start Your journey</div>
        <div className={classes.textBlock4}>Food</div>
        <div className={classes.textBlock5}>Near You!</div>
      </div>
      <div className={classes.shadow}></div>
      <div className={classes.iPhone13}></div>
      <div className={classes.shadow2}></div>
      <div className={classes.iPhone132}></div>
      <div className={classes.screen}></div>
      <div className={classes.ellipse42}>
        <Ellipse42Icon className={classes.icon8} />
      </div>
      <div className={classes.vectorBawah2}>
        <VectorBawah2Icon className={classes.icon9} />
      </div>
      <div className={classes.vectorBawah1}>
        <VectorBawah1Icon className={classes.icon10} />
      </div>
      <div className={classes.vectorAtas2}>
        <VectorAtas2Icon className={classes.icon11} />
      </div>
      <div className={classes.vectorAtas1}>
        <VectorAtas1Icon className={classes.icon12} />
      </div>
      <div className={classes.pasta1}></div>
    </div>
  );
});
