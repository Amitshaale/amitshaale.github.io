(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-our-story-our-story-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/products/our-story/our-story/our-story.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** /Users/shaale/Desktop/shaale-projects/shaale/node_modules/raw-loader/dist/cjs.js!./src/app/products/our-story/our-story/our-story.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-layout our-story bg-color\">\n    <div class=\"section\" id=\"story\">\n        <div class=\"wrapper-prallax\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-6 col-12 d-md-none d-none\">\n                        <img src=\"assets/img/our-story/story.png\" class=\"img-responsive\">\n                    </div>\n                    <div class=\"col-md-6 col-12\">\n                        <div class=\"inner-content\">\n                            <h1 class=\"\">The Shaale <span class=\"red-text\">Story</span></h1>\n                            <p class=\"\">Shaale is the Kannada word for “school,” similar to the root word shaala (शाला)\n                                in Sanskrit or paathshaala (पाठशाला) in Hindi.</p>\n                            <p class=\"\">Shaale leverages technology to document and market Indian arts and literature\n                                globally — through authentic courses, flawless live-streaming of events, innovative\n                                mobile apps, and more.</p>\n                            <p class=\"\">Shaale’s magic lies in its committed team of developers, engineers,\n                                cinematographers, video editors, designers, sound recordists and animators, who are\n                                trained in and are passionate about Indian arts and literature.</p>\n                            <a class=\"btn know-more\" href=\"assets/pdf/Shaale-A-Brochure.pdf\" download>Download\n                                Brochure</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section\" id=\"vision\">\n        <div class=\"wrapper-prallax\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-6 col-12 d-md-none\">\n                        <img src=\"assets/img/our-story/vision.png\" class=\"img-responsive\">\n                    </div>\n                    <div class=\"col-md-6 col-12 offset-md-6\">\n                        <div class=\"inner-content\">\n                            <h1 class=\"\">Inspiration and <span class=\"red-text\">Vision</span></h1>\n                            <p class=\"\">The range of art forms, performative styles, and knowledge in India is\n                                staggering in\n                                breadth and depth. Pride in this heritage and conviction in the timeless value of Indian\n                                arts and\n                                literature motivated Shaale’s founding team. Sadly, over time, Indian art forms and\n                                literary systems\n                                have been faced with the challenges of poor documentation, unavailability of authentic\n                                resources, and\n                                inadequate awareness among potential audiences. These issues have led to dwindling\n                                connoisseurs, lack\n                                of awareness, and under-appreciation of these cultural assets.</p>\n                            <p class=\"\">To make such a repository an active learning place, like a “shaale” ought to be,\n                                we are\n                                reimagining how traditional art forms and literary canons can be accessed and\n                                experienced in the 21st\n                                century. With our range of products and services, we are enabling a boundaryless global\n                                community to\n                                experience how the evolving arts and literature that have journeyed through centuries,\n                                can enrich us\n                                today.</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section\" id=\"team\">\n        <div class=\"wrapper-prallax\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-6 col-12 d-md-none\">\n                        <img src=\"assets/img/our-story/team.png\" class=\"img-responsive\">\n                    </div>\n                    <div class=\"col-md-6 col-12\">\n                        <div class=\"inner-content\">\n                            <h1 class=\"\">Shaale's <span class=\"red-text\">Team</span></h1>\n                            <p class=\"\">Shaale’s team of 20+ innovative developers and engineers, and talented\n                                cinematographers,\n                                video editors, designers, colorists, sound designers, and animators, are trained in and\n                                passionate\n                                about Indian arts and literature. Every day, we envisage new ways to expand and advance\n                                our\n                                Shaale—with new ideas, concepts, lessons, activities, or with new ways to enjoy\n                                learning.</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/products/our-story/our-story-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/products/our-story/our-story-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: OurStoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurStoryRoutingModule", function() { return OurStoryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _our_story_our_story_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./our-story/our-story.component */ "./src/app/products/our-story/our-story/our-story.component.ts");




const routes = [
    {
        path: '',
        component: _our_story_our_story_component__WEBPACK_IMPORTED_MODULE_3__["OurStoryComponent"],
        data: { title: 'Organisation about' }
    }
];
let OurStoryRoutingModule = class OurStoryRoutingModule {
};
OurStoryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], OurStoryRoutingModule);



/***/ }),

/***/ "./src/app/products/our-story/our-story.module.ts":
/*!********************************************************!*\
  !*** ./src/app/products/our-story/our-story.module.ts ***!
  \********************************************************/
/*! exports provided: OurStoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurStoryModule", function() { return OurStoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _our_story_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./our-story-routing.module */ "./src/app/products/our-story/our-story-routing.module.ts");
/* harmony import */ var _our_story_our_story_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./our-story/our-story.component */ "./src/app/products/our-story/our-story/our-story.component.ts");





let OurStoryModule = class OurStoryModule {
};
OurStoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_our_story_our_story_component__WEBPACK_IMPORTED_MODULE_4__["OurStoryComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _our_story_routing_module__WEBPACK_IMPORTED_MODULE_3__["OurStoryRoutingModule"]
        ]
    })
], OurStoryModule);



/***/ }),

/***/ "./src/app/products/our-story/our-story/our-story.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/products/our-story/our-story/our-story.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".our-story.bg-color {\n  background: #4a1c3d;\n}\n\n.our-story .section {\n  min-height: 100vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.our-story .section .wrapper-prallax {\n  width: 100%;\n  padding: 50px 0;\n}\n\n.our-story .section .wrapper-prallax h1 {\n  font-size: 3rem;\n  color: #ffffff;\n  font-weight: bold;\n  text-transform: uppercase;\n  margin-bottom: 25px;\n}\n\n.our-story .section .wrapper-prallax h1 .red-text {\n  color: #e14146;\n}\n\n.our-story .section .wrapper-prallax p {\n  color: #ffffff;\n  font-weight: 300;\n  margin-bottom: 25px;\n  font-size: 1rem;\n  line-height: 29px;\n}\n\n.our-story .section .wrapper-prallax .btn.know-more {\n  background: #e24146;\n  color: #ffffff;\n  font-size: 18px;\n  padding: 10px 50px;\n  border-radius: 25px;\n  margin-top: 30px;\n}\n\n.our-story .section .wrapper-prallax .img-responsive {\n  max-width: 100%;\n}\n\n#story {\n  background-image: url('story-bg.png');\n  background-size: contain;\n  background-position: bottom right;\n  box-shadow: 0 0 black;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  padding: 0;\n}\n\n#vision {\n  background-image: url('vision-bg.png');\n  background-size: contain;\n  background-position: bottom right;\n  box-shadow: 0 0 black;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  padding: 0;\n}\n\n#team {\n  background-image: url('team-bg.png');\n  background-size: contain;\n  background-position: bottom right;\n  box-shadow: 0 0 black;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  padding: 0;\n}\n\n@media (max-width: 768px) {\n  .our-story .section .wrapper-prallax h1 {\n    font-size: 2rem;\n    margin-bottom: 10px;\n  }\n  .our-story .section .wrapper-prallax p {\n    margin-bottom: 15px;\n  }\n  .our-story .section .wrapper-prallax .inner-content {\n    padding-top: 30px;\n  }\n  .our-story .section .wrapper-prallax .btn.know-more {\n    padding: 5px 40px;\n    margin-top: 10px;\n    font-size: 16px;\n  }\n\n  #vision {\n    background-image: none;\n  }\n\n  #team {\n    background-image: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFhbGUvRGVza3RvcC9zaGFhbGUtcHJvamVjdHMvc2hhYWxlL3Byb2plY3RzL3NoYWFsZS9zcmMvYXBwL3Byb2R1Y3RzL291ci1zdG9yeS9vdXItc3Rvcnkvb3VyLXN0b3J5LmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvc2hhYWxlL3NyYy9hcHAvcHJvZHVjdHMvb3VyLXN0b3J5L291ci1zdG9yeS9vdXItc3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKOztBREdJO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNBUjs7QURFUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDQVo7O0FERVk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0FoQjs7QURDZ0I7RUFDSSxjQUFBO0FDQ3BCOztBREdZO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNEaEI7O0FESVk7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDRmhCOztBREtZO0VBQ0ksZUFBQTtBQ0hoQjs7QURTQTtFQUNJLHFDQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7QUNOSjs7QURTQTtFQUNJLHNDQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7QUNOSjs7QURTQTtFQUNJLG9DQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7QUNOSjs7QURVQTtFQU1nQjtJQUNJLGVBQUE7SUFDQSxtQkFBQTtFQ1psQjtFRGVjO0lBQ0ksbUJBQUE7RUNibEI7RURnQmM7SUFDSSxpQkFBQTtFQ2RsQjtFRGlCYztJQUNJLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0VDZmxCOztFRHNCRTtJQUNJLHNCQUFBO0VDbkJOOztFRHNCRTtJQUNJLHNCQUFBO0VDbkJOO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMvc2hhYWxlL3NyYy9hcHAvcHJvZHVjdHMvb3VyLXN0b3J5L291ci1zdG9yeS9vdXItc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3VyLXN0b3J5LmJnLWNvbG9yIHtcbiAgICBiYWNrZ3JvdW5kOiAjNGExYzNkO1xufVxuXG4ub3VyLXN0b3J5IHtcbiAgICAuc2VjdGlvbiB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgLndyYXBwZXItcHJhbGxheCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDUwcHggMDtcblxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICAgICAgICAgICAgLnJlZC10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlMTQxNDY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI5cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLmJ0bi5rbm93LW1vcmUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlMjQxNDY7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLmltZy1yZXNwb25zaXZlIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiNzdG9yeSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL291ci1zdG9yeS9zdG9yeS1iZy5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIHJpZ2h0O1xuICAgIGJveC1zaGFkb3c6IDAgMCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgcGFkZGluZzogMDtcbn1cblxuI3Zpc2lvbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL291ci1zdG9yeS92aXNpb24tYmcucG5nJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSByaWdodDtcbiAgICBib3gtc2hhZG93OiAwIDAgYmxhY2s7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbiN0ZWFtIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvb3VyLXN0b3J5L3RlYW0tYmcucG5nJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSByaWdodDtcbiAgICBib3gtc2hhZG93OiAwIDAgYmxhY2s7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7IFxuXG4gICAgLm91ci1zdG9yeSB7XG4gICAgICAgIC5zZWN0aW9uIHtcbiAgICAgICAgICAgIC53cmFwcGVyLXByYWxsYXgge1xuXG4gICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmlubmVyLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuYnRuLmtub3ctbW9yZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCA0MHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgXG4gICAgI3Zpc2lvbiB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgfVxuICAgIFxuICAgICN0ZWFtIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICB9XG59IiwiLm91ci1zdG9yeS5iZy1jb2xvciB7XG4gIGJhY2tncm91bmQ6ICM0YTFjM2Q7XG59XG5cbi5vdXItc3RvcnkgLnNlY3Rpb24ge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm91ci1zdG9yeSAuc2VjdGlvbiAud3JhcHBlci1wcmFsbGF4IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDUwcHggMDtcbn1cbi5vdXItc3RvcnkgLnNlY3Rpb24gLndyYXBwZXItcHJhbGxheCBoMSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLm91ci1zdG9yeSAuc2VjdGlvbiAud3JhcHBlci1wcmFsbGF4IGgxIC5yZWQtdGV4dCB7XG4gIGNvbG9yOiAjZTE0MTQ2O1xufVxuLm91ci1zdG9yeSAuc2VjdGlvbiAud3JhcHBlci1wcmFsbGF4IHAge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMjlweDtcbn1cbi5vdXItc3RvcnkgLnNlY3Rpb24gLndyYXBwZXItcHJhbGxheCAuYnRuLmtub3ctbW9yZSB7XG4gIGJhY2tncm91bmQ6ICNlMjQxNDY7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDEwcHggNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5vdXItc3RvcnkgLnNlY3Rpb24gLndyYXBwZXItcHJhbGxheCAuaW1nLXJlc3BvbnNpdmUge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbiNzdG9yeSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvb3VyLXN0b3J5L3N0b3J5LWJnLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gcmlnaHQ7XG4gIGJveC1zaGFkb3c6IDAgMCBibGFjaztcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgcGFkZGluZzogMDtcbn1cblxuI3Zpc2lvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvb3VyLXN0b3J5L3Zpc2lvbi1iZy5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIHJpZ2h0O1xuICBib3gtc2hhZG93OiAwIDAgYmxhY2s7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIHBhZGRpbmc6IDA7XG59XG5cbiN0ZWFtIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9vdXItc3RvcnkvdGVhbS1iZy5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIHJpZ2h0O1xuICBib3gtc2hhZG93OiAwIDAgYmxhY2s7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIHBhZGRpbmc6IDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAub3VyLXN0b3J5IC5zZWN0aW9uIC53cmFwcGVyLXByYWxsYXggaDEge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5vdXItc3RvcnkgLnNlY3Rpb24gLndyYXBwZXItcHJhbGxheCBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG4gIC5vdXItc3RvcnkgLnNlY3Rpb24gLndyYXBwZXItcHJhbGxheCAuaW5uZXItY29udGVudCB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gIH1cbiAgLm91ci1zdG9yeSAuc2VjdGlvbiAud3JhcHBlci1wcmFsbGF4IC5idG4ua25vdy1tb3JlIHtcbiAgICBwYWRkaW5nOiA1cHggNDBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gICN2aXNpb24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIH1cblxuICAjdGVhbSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/products/our-story/our-story/our-story.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/products/our-story/our-story/our-story.component.ts ***!
  \*********************************************************************/
/*! exports provided: OurStoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurStoryComponent", function() { return OurStoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let OurStoryComponent = class OurStoryComponent {
    constructor() { }
    ngOnInit() {
    }
};
OurStoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'shaale-our-story',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./our-story.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/products/our-story/our-story/our-story.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./our-story.component.scss */ "./src/app/products/our-story/our-story/our-story.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], OurStoryComponent);



/***/ })

}]);
//# sourceMappingURL=products-our-story-our-story-module-es2015.js.map