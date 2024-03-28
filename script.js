import numberWithZero from "./global/numberWithZero.js";
import preloader from "./global/preloader.js";
import navMenuTabs from "./nav/navMenuTabs.js";
import bannerSlider from "./nav/bannerSlider.js";
import customVimeoPlayer from "./global/customVimeoPlayer.js";
import alternateDataSrcLoad from "./global/alternateDataSrcLoad.js";
import videoZoomGSAP from "./GSAP/videoZoomGSAP.js";
import qrPhoneMovementGSAP from "./GSAP/qrPhoneMovementGSAP.js";
import fadeInAnimation from "./GSAP/fadeInAnimation.js";
// Nav Scripts
import lightboxLink from "./nav/lightboxLink.js";
import disablePageScrolling from "./nav/disablePageScrolling.js";
// Footer Scripts
import copyrightYear from "./footer/copyrightYear.js";

// Nav Scripts
lightboxLink();
disablePageScrolling();

numberWithZero();
preloader();
navMenuTabs();
bannerSlider();
customVimeoPlayer();
alternateDataSrcLoad();
videoZoomGSAP();
qrPhoneMovementGSAP();
fadeInAnimation();

// Footer Scripts
copyrightYear();
