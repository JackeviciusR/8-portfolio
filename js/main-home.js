/**************/
// ALL IMPORTS
/**************/

/* header */
import { renderHeader } from './components/header/renderHeader.js';
import { headerData } from './data/headerData.js';
/* hero */

/* features */
import { renderPremiumFeatures } from './components/premium-features/renderPremiumFeatures.js';
import { premiumFeaturesData } from './data/premiumFeaturesData.js'

/* app promo */
/* app promo 2 */
/* how works */
/* gallery */
/* testimonials */
/* pricing */
/* faq */
/* team */
/* app store */
/* subscribe */
/* contact */
/* footer */


/**************/
// EXECUTION
/**************/

/* header */
/* hero */
renderHeader('header nav', headerData);

/* features */
renderPremiumFeatures('#premium_features_block', premiumFeaturesData);

/* app promo */
/* app promo 2 */
/* how works */
/* gallery */
/* testimonials */
/* pricing */
/* faq */
/* team */
/* app store */
/* subscribe */
/* contact */
/* footer */


// TEST

import { jestTest } from './jest-test.js';

jestTest();