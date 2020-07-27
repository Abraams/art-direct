"use strict";var offerAnim=anime.timeline({easing:"easeInOutCubic",duration:1500});document.addEventListener("DOMContentLoaded",function(){1023<=window.screen.width&&(document.querySelector(".offer .bg.type-1")?(anime({targets:".bg #illustration-1-1",translateX:["35px","0"],translateY:["-20px","0"],opacity:["0","1"],duration:1700,easing:"easeInOutCubic"}),anime({targets:".bg #illustration-1-2",translateX:["-180px","0"],translateY:["30px","0"],opacity:["0","1"],duration:1500,delay:350,easing:"easeInOutCubic"})):document.querySelector(".offer .bg.type-2")&&(anime({targets:".bg #illustration-2-1",translateY:["-50px","0"],opacity:["0","1"],duration:1700,easing:"easeInOutCubic"}),anime({targets:".bg #illustration-2-2",translateX:["-200px","0"],translateY:["-30px","0"],opacity:["0","1"],duration:2e3,delay:350,easing:"easeInOutCubic"})),offerAnim.add({targets:[".header__logo img"],scale:[.95,1],opacity:[0,1],duration:1e3},250).add({targets:".nav__menu li",translateY:["35%","0"],opacity:[0,1],duration:650,delay:anime.stagger(150)},"-=800").add({targets:".nav__contacts .social__item img",scale:[.8,1],opacity:[0,1],duration:650,delay:anime.stagger(100)},"-=450").add({targets:".nav__contacts .contacts__item",opacity:[0,1],duration:500},"-=450").add({targets:".offer__img",translateY:["15px","0"],opacity:["0","1"]},"-=1450").add({targets:".offer__heading h1",translateX:["-200px","0"],opacity:["0","1"]},"-=1400").add({targets:".offer__heading p",translateX:["-210px","0"],opacity:["0","1"]},"-=1450").add({targets:".offer__heading .offer__btn-wrap",translateX:["-220px","0"],opacity:["0","1"]},"-=1450").add({targets:".offer__heading .offer__btn-wrap span",opacity:["0","1"]},"-=1500"),document.querySelector(".services .services__item")&&anime({targets:".services .services__item",translateY:["75px",0],opacity:[0,1],duration:600,delay:anime.stagger(150,{start:1300}),easing:"easeInOutCubic"}),document.querySelector(".reviews-more")&&anime({targets:".reviews-more",translateY:["75px",0],opacity:[0,1],duration:1e3,delay:1200,easing:"easeInOutCubic"}),document.querySelector(".advantages")&&anime({targets:".advantages",translateY:["25px",0],opacity:[0,1],duration:1e3,delay:1200,easing:"easeInOutCubic"}),document.querySelector(".portfolio-grid")&&anime({targets:".portfolio-grid",translateY:["25px",0],opacity:[0,1],duration:1e3,delay:1200,easing:"easeInOutCubic"}),document.querySelector(".services-more.design-card")&&(anime({targets:".services-more.design-card",translateY:["75px",0],opacity:[0,1],duration:800,delay:1300,easing:"easeInOutCubic"}),anime({targets:".services-more.design-card .card-num",translateY:["10px",0],opacity:[0,1],duration:600,delay:1700,easing:"easeInOutCubic"}),anime({targets:".services-more.design-card h2",translateY:["10px",0],opacity:[0,1],duration:600,delay:1900,easing:"easeInOutCubic"}),anime({targets:".services-more.design-card .card__content",translateY:["10px",0],opacity:[0,1],duration:600,delay:2100,easing:"easeInOutCubic"}))),window.screen.width<=1023&&(document.querySelector(".offer .bg.type-1")?(anime({targets:".bg #illustration-1-1",translateX:["150px","0"],translateY:["-20px","0"],opacity:["0","1"],duration:2e3,easing:"easeInOutCubic"}),anime({targets:".bg #illustration-1-2",translateX:["-180px","0"],opacity:["0","1"],duration:2e3,delay:300,easing:"easeInOutCubic"})):document.querySelector(".offer .bg.type-2")&&(anime({targets:".bg #illustration-2-1",translateY:["-50px","0"],opacity:["0","1"],duration:2e3,easing:"easeInOutCubic"}),anime({targets:".bg #illustration-2-2",translateX:["-80px","0"],translateY:["-20px","0"],opacity:["0","1"],duration:2e3,delay:350,easing:"easeInOutCubic"})),offerAnim.add({targets:".bg #illustration-1",translateX:["180px","0"],translateY:["-20px","0"],opacity:["0","1"],duration:1e3,easing:"easeInOutCubic"}).add({targets:[".header__logo img",".offer__logo img"],scale:[.95,1],opacity:[0,1],duration:1e3},250).add({targets:".header",opacity:["0","1"],easing:"easeInOutCubic",duration:1e3},"-=500").add({targets:".bg #illustration-2",translateX:["-180px","0"],opacity:["0","1"],duration:1e3,easing:"easeInOutCubic"},"-=1000").add({targets:".offer__heading h1",translateY:["20px","0"],duration:1e3,opacity:["0","1"]},"-=850").add({targets:".offer__heading p",translateY:["50px","0"],duration:1e3,opacity:["0","1"]},"-=900").add({targets:".offer__heading .offer__btn-wrap",translateY:["70px","0"],duration:1e3,opacity:["0","1"]},"-=900").add({targets:".offer__heading .offer__btn-wrap span",duration:1e3,opacity:["0","1"]},"-=850").add({targets:".offer__img",translateY:["90px","0"],duration:1e3,opacity:["0","1"]},"-=900"))});
"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}var HeaderBar=function(){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.querySelector("#Header"),t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:e.querySelector("#HeaderToggler"),i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=3<arguments.length&&void 0!==arguments[3]&&arguments[3],a=4<arguments.length&&void 0!==arguments[4]&&arguments[4];_classCallCheck(this,o),this.elem=e,this.toggler=t,this.fixed=i,this.mobile=n,this.open=a}return _createClass(o,[{key:"fix",value:function(){if(!this.mobile)return!this.fixed&&(this.elem.classList.add("_fixed"),this.fixed=!0)}},{key:"unfix",value:function(){if(!this.mobile){if(!this.fixed)return!1;this.elem.classList.remove("_fixed"),this.fixed=!1}}},{key:"openMenu",value:function(){return this.toggler.classList.add("_active"),this.elem.classList.add("_open"),this.openAnimation(),this.open=!0}},{key:"closeMenu",value:function(){return this.toggler.classList.remove("_active"),this.elem.classList.remove("_open"),!(this.open=!1)}},{key:"toggleMenu",value:function(){return this.mobile&&(this.open?this.closeMenu():this.openMenu()),!1}},{key:"enableMobileMod",value:function(){var i=this;return this.elem.addEventListener("click",function(e){var t=e.target;t.closest("#".concat(i.toggler.id))&&i.toggleMenu(),"a"===t.tagName.toLowerCase()&&i.closeMenu()}),!1}},{key:"enableDesctopMod",value:function(){var e,t=this;window.addEventListener("scroll",function(){500<=(e=document.querySelector("html").scrollTop)&&!t.fixed?t.fix():e<=300&&t.fixed&&t.unfix()})}},{key:"toggleMenuMod",value:function(){window.screen.width<=971?(this.unfix(),this.mobile=!0,this.enableMobileMod()):(this.closeMenu(),this.mobile=!1,this.enableDesctopMod())}},{key:"openAnimation",value:function(){var e=anime.timeline({easing:"easeInOutQuad",duration:600,autoplay:!1});e.add({targets:"#".concat(this.elem.id," .nav__menu li"),translateX:["55%","0"],opacity:[0,1],delay:anime.stagger(150)},"+=200").add({targets:"#".concat(this.elem.id," .header__logo img"),scale:[.95,1],opacity:[0,1]},"-=650").add({targets:"#".concat(this.elem.id," .nav__contacts .social__item img"),translateY:["10%","0"],opacity:[0,1],duration:300,delay:anime.stagger(150)},"-=500").add({targets:"#".concat(this.elem.id," .nav__contacts .contacts__item"),opacity:[0,1],duration:500},"-=400"),e.play()}}]),o}();function initMenu(){var e=document.querySelector("#header"),t=e.querySelector("#headerToggler");new HeaderBar(e,t).toggleMenuMod()}
"use strict";var openModalElems=document.querySelectorAll("[data-modal-id]"),closeModalElems=document.querySelectorAll("[data-modal-close]"),modalElems=document.querySelectorAll(".modal");function openModal(){var e=this.getAttribute("data-modal-id"),a=this.getAttribute("data-modal-title"),o=this.getAttribute("data-modal-subject"),c=this.getAttribute("data-modal-metrica");modalElems.forEach(function(t){t.getAttribute("id")===e&&("modal-thx"!==e&&chageModalParams(e,a,o,c),t.classList.remove("_hidden"))})}function chageModalParams(t,e,a,o){switch(""!==e){case!0:document.querySelector("#".concat(t," .modal__title")).innerHTML=e;break;default:document.querySelector("#".concat(t," .modal__title")).innerHTML="Закажите обратный звонок"}switch(""!==a){case!0:document.querySelector("#".concat(t,' [name="msg_subject"]')).value=a;break;default:document.querySelector("#".concat(t,' [name="msg_subject"]')).value="Клиент ждет обратного звонка"}switch(""!==o){case!0:document.querySelector("#".concat(t," [data-modal-metrica]")).setAttribute("data-modal-metrica",o);break;default:document.querySelector("#".concat(t," [data-modal-metrica]")).setAttribute("data-modal-metrica","form")}}function closeModal(){this.getAttribute("data-modal-id");modalElems.forEach(function(t){t.classList.contains("_hidden")||t.classList.add("_hidden")})}document.addEventListener("DOMContentLoaded",function(){closeModalElems.forEach(function(t){t.addEventListener("click",closeModal)}),openModalElems.forEach(function(t){t.addEventListener("click",openModal)})});
"use strict";function accordionHandler(){if(!document.querySelector("[data-accordion]"))return!1;var e=document.querySelectorAll("[data-accordion]");e.forEach(function(t){t.addEventListener("click",function(){e.forEach(function(e){e!==t?e.classList.add("--hidden"):setTimeout(function(){e.classList.remove("--hidden")},700)})})})}function rangeHandler(){if(!document.querySelector(".question__range"))return!1;var e=document.querySelector(".question__range"),t=e.querySelector('input[type="range"]'),o=e.querySelector("span.question__range-count");t.addEventListener("input",function(){o.textContent=this.value})}document.addEventListener("DOMContentLoaded",function(){document.querySelector("#portfolioSlider")&&($("#portfolioSlider").slick({infinite:!1,dots:!1,fade:!0,speed:1500,slidesToShow:1,slidesToScroll:1,useCSS:!1,adaptiveHeight:!1,useTransform:!1,appendArrows:$(".slider__arrows"),prevArrow:'<button type="button" class="slick-prev _col">\n\t\t\t\t\t\t\t<img src=\'./img/icons/arrow.svg\'>\n\t\t\t\t\t\t</button>',nextArrow:'<button type="button" class="slick-next _col">\n\t\t\t\t\t\t\t<img src=\'./img/icons/arrow.svg\'>\n\t\t\t\t\t\t</button>'}),$("#portfolioSlider").on("beforeChange",function(e,t,o,n){$(".slider__arrows").addClass("--hidden")}),$("#portfolioSlider").on("afterChange",function(e,t,o,n){$(".slider__arrows").removeClass("--hidden")})),document.querySelector("#reviewsMore")&&$("#reviewsMore").slick({infinite:!1,arrows:!1,speed:1e3,slidersToShow:1,slidesToscroll:1,swipeToSlide:!0,adaptiveHeight:!1}),$(document).ready(function(){$(".your-class").slick()}),initMenu(),accordionHandler(),rangeHandler(),lightbox.option({resizeDuration:200,wrapAround:!0,albumLabel:"",disableScrolling:!0})});