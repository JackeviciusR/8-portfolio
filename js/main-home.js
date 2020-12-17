/***************
ALL IMPORTS
****************/
/* header */
import { renderHeader } from './components/header/renderHeader.js';
import { headerData } from './data/headerData.js';
/* hero */
/* stats */
import { Counter } from './components/counter/Counter.js';
import { statsData } from './data/statsData.js';
/* stats */
/* features */
import { renderPremiumFeatures } from './components/premium-features/renderPremiumFeatures.js';
import { premiumFeaturesData } from './data/premiumFeaturesData.js';
/* app promo */
/* app promo 2 */
/* how works */
/* gallery */
/* testimonials */
import { Testimonials } from './components/testimonials/Testimonials.js';
import { testimonialData } from './data/testimonialsData.js';
/* pricing */
/* faq */
/* team */
/* app store */
/* subscribe */
/* contact */
/* footer */

/***************
EXECUTION
****************/
/* header */
renderHeader('header nav', headerData);

/* hero */
/* stats */
new Counter({
    selector: '#stats_counter_block',
    data: statsData,
});

/* stats */
/* features */
renderPremiumFeatures('#premium_features_block', premiumFeaturesData);

/* app promo */
/* app promo 2 */
/* how works */
/* gallery */
/* testimonials */
new Testimonials({
    selector: '#testimonials_block',
    data: testimonialData,
    // isArrowControlsVisible: false,
    // isDotControlsVisible: true,
    // maxItems: 7,
    // cloneCount: 2,
    // visibilityStrategy: 'last',
});

/* pricing */
/* faq */
/* team */
/* app store */
/* subscribe */
/* contact */
/* footer */