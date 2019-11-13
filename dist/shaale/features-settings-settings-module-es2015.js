(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-settings-settings-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/features/settings/settings/settings-container.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** /Users/shaale/Desktop/shaale-projects/shaale/node_modules/raw-loader/dist/cjs.js!./src/app/features/settings/settings/settings-container.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\"><h1>{{ 'shaale.settings.title' | translate }}</h1></div>\n  </div>\n  <br>\n  <ng-container *ngIf=\"settings$ | async as settings\">\n    <div class=\"row\">\n      <div class=\"col-md-6 group\" [ngClass]=\"routeAnimationsElements\">\n        <h2>{{ 'shaale.settings.general.title' | translate }}</h2>\n        <div class=\"icon-form-field\">\n          <mat-icon color=\"accent\"><fa-icon icon=\"language\" color=\"accent\"></fa-icon></mat-icon>\n          <mat-form-field>\n            <mat-select [placeholder]=\"'shaale.settings.general.placeholder' | translate\"\n                        [ngModel]=\"settings.language\"\n                        (selectionChange)=\"onLanguageSelect($event)\"\n                        name=\"language\">\n              <mat-option *ngFor=\"let l of languages\" [value]=\"l.value\">\n                {{ 'shaale.settings.general.language.' + l.label | translate }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n        <div class=\"icon-form-field\">\n           <mat-icon color=\"accent\"><fa-icon icon=\"bars\" color=\"accent\"></fa-icon></mat-icon>\n           <mat-placeholder>{{ 'shaale.settings.themes.sticky-header' | translate }}\n           </mat-placeholder>\n           <mat-slide-toggle\n             [checked]=\"settings.stickyHeader\"\n             (change)=\"onStickyHeaderToggle($event)\">\n           </mat-slide-toggle>\n         </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6 group\" [ngClass]=\"routeAnimationsElements\">\n        <h2>{{ 'shaale.settings.themes.title' | translate }}</h2>\n        <div class=\"icon-form-field\">\n          <mat-icon color=\"accent\"><fa-icon icon=\"paint-brush\" color=\"accent\"></fa-icon></mat-icon>\n          <mat-form-field>\n            <mat-select [placeholder]=\"'shaale.settings.themes.placeholder' | translate\"\n                        [ngModel]=\"settings.theme\"\n                        (selectionChange)=\"onThemeSelect($event)\"\n                        name=\"themes\">\n              <mat-option *ngFor=\"let t of themes\" [value]=\"t.value\">\n                {{ 'shaale.settings.themes.' + t.label | translate }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n        <div class=\"icon-form-field\">\n          <mat-icon color=\"accent\"><fa-icon icon=\"lightbulb\" color=\"accent\"></fa-icon></mat-icon>\n          <mat-placeholder>{{ 'shaale.settings.themes.night-mode' | translate }}\n          </mat-placeholder>\n          <mat-slide-toggle\n            [checked]=\"settings.autoNightMode\"\n            (change)=\"onAutoNightModeToggle($event)\">\n          </mat-slide-toggle>\n        </div>\n      </div>\n      <div class=\"col-md-6 group\" [ngClass]=\"routeAnimationsElements\">\n        <h2>{{ 'shaale.settings.animations.title' | translate }}</h2>\n        <div class=\"icon-form-field\">\n          <mat-icon color=\"accent\"><mat-icon color=\"accent\"><fa-icon icon=\"window-maximize\"></fa-icon></mat-icon></mat-icon>\n          <mat-placeholder>{{ 'shaale.settings.animations.page' | translate }}\n          </mat-placeholder>\n          <mat-slide-toggle\n            matTooltip=\"Sorry, this feature is disabled in IE, EDGE and Safari\"\n            matTooltipPosition=\"before\"\n            *ngIf=\"settings.pageAnimationsDisabled\"\n            disabled>\n          </mat-slide-toggle>\n          <mat-slide-toggle\n            *ngIf=\"!settings.pageAnimationsDisabled\"\n            [checked]=\"settings.pageAnimations\"\n            (change)=\"onPageAnimationsToggle($event)\">\n          </mat-slide-toggle>\n        </div>\n        <div class=\"icon-form-field\">\n          <mat-icon color=\"accent\"><fa-icon icon=\"stream\" color=\"accent\"></fa-icon></mat-icon>\n          <mat-placeholder>{{ 'shaale.settings.animations.elements' | translate }}\n          </mat-placeholder>\n          <mat-slide-toggle\n            [checked]=\"settings.elementsAnimations\"\n            (change)=\"onElementsAnimationsToggle($event)\">\n          </mat-slide-toggle>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n</div>\n");

/***/ }),

/***/ "./src/app/features/settings/settings-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/features/settings/settings-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: SettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function() { return SettingsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _settings_settings_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/settings-container.component */ "./src/app/features/settings/settings/settings-container.component.ts");




const routes = [
    {
        path: '',
        component: _settings_settings_container_component__WEBPACK_IMPORTED_MODULE_3__["SettingsContainerComponent"],
        data: { title: 'shaale.menu.settings' }
    }
];
let SettingsRoutingModule = class SettingsRoutingModule {
};
SettingsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SettingsRoutingModule);



/***/ }),

/***/ "./src/app/features/settings/settings.module.ts":
/*!******************************************************!*\
  !*** ./src/app/features/settings/settings.module.ts ***!
  \******************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/features/settings/settings-routing.module.ts");
/* harmony import */ var _settings_settings_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/settings-container.component */ "./src/app/features/settings/settings/settings-container.component.ts");






let SettingsModule = class SettingsModule {
};
SettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_settings_settings_container_component__WEBPACK_IMPORTED_MODULE_5__["SettingsContainerComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _settings_routing_module__WEBPACK_IMPORTED_MODULE_4__["SettingsRoutingModule"]]
    })
], SettingsModule);



/***/ }),

/***/ "./src/app/features/settings/settings/settings-container.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/features/settings/settings/settings-container.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  margin-top: 20px;\n}\n\nh1 {\n  margin: 0 0 20px 0;\n  text-transform: uppercase;\n}\n\nh2 {\n  margin: 0 0 10px 0;\n  text-transform: uppercase;\n}\n\n.group {\n  margin: 0 0 40px 0;\n}\n\n.icon-form-field {\n  position: relative;\n  display: flex;\n  height: 65.5px;\n  align-items: center;\n}\n\n.icon-form-field mat-placeholder {\n  flex: 2 1 auto;\n}\n\nmat-icon {\n  margin: 0 6px 6px 0;\n  font-size: 20px;\n}\n\nmat-form-field {\n  flex: 1 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFhbGUvRGVza3RvcC9zaGFhbGUtcHJvamVjdHMvc2hhYWxlL3Byb2plY3RzL3NoYWFsZS9zcmMvYXBwL2ZlYXR1cmVzL3NldHRpbmdzL3NldHRpbmdzL3NldHRpbmdzLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3NoYWFsZS9zcmMvYXBwL2ZlYXR1cmVzL3NldHRpbmdzL3NldHRpbmdzL3NldHRpbmdzLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxjQUFBO0FDQ0o7O0FER0E7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7QUNBRiIsImZpbGUiOiJwcm9qZWN0cy9zaGFhbGUvc3JjL2FwcC9mZWF0dXJlcy9zZXR0aW5ncy9zZXR0aW5ncy9zZXR0aW5ncy1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuaDEge1xuICBtYXJnaW46IDAgMCAyMHB4IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbmgyIHtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZ3JvdXAge1xuICBtYXJnaW46IDAgMCA0MHB4IDA7XG59XG5cbi5pY29uLWZvcm0tZmllbGQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNjUuNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIG1hdC1wbGFjZWhvbGRlciB7XG4gICAgZmxleDogMiAxIGF1dG87XG4gIH1cbn1cblxubWF0LWljb24ge1xuICBtYXJnaW46IDAgNnB4IDZweCAwO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgZmxleDogMSAwIGF1dG87XG59XG4iLCIuY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuaDEge1xuICBtYXJnaW46IDAgMCAyMHB4IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbmgyIHtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZ3JvdXAge1xuICBtYXJnaW46IDAgMCA0MHB4IDA7XG59XG5cbi5pY29uLWZvcm0tZmllbGQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNjUuNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmljb24tZm9ybS1maWVsZCBtYXQtcGxhY2Vob2xkZXIge1xuICBmbGV4OiAyIDEgYXV0bztcbn1cblxubWF0LWljb24ge1xuICBtYXJnaW46IDAgNnB4IDZweCAwO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgZmxleDogMSAwIGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/features/settings/settings/settings-container.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/features/settings/settings/settings-container.component.ts ***!
  \****************************************************************************/
/*! exports provided: SettingsContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsContainerComponent", function() { return SettingsContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/settings/settings.actions */ "./src/app/core/settings/settings.actions.ts");
/* harmony import */ var _core_settings_settings_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/settings/settings.selectors */ "./src/app/core/settings/settings.selectors.ts");






let SettingsContainerComponent = class SettingsContainerComponent {
    constructor(store) {
        this.store = store;
        this.routeAnimationsElements = _core_core_module__WEBPACK_IMPORTED_MODULE_3__["ROUTE_ANIMATIONS_ELEMENTS"];
        this.themes = [
            { value: 'BLACK-THEME', label: 'dark' },
            { value: 'LIGHT-THEME', label: 'light' },
        ];
        this.languages = [
            { value: 'en', label: 'en' },
            { value: 'de', label: 'de' },
            { value: 'sk', label: 'sk' },
            { value: 'fr', label: 'fr' },
            { value: 'es', label: 'es' },
            { value: 'pt-br', label: 'pt-br' },
            { value: 'zh-cn', label: 'zh-cn' },
            { value: 'he', label: 'he' }
        ];
    }
    ngOnInit() {
        this.settings$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_core_settings_settings_selectors__WEBPACK_IMPORTED_MODULE_5__["selectSettings"]));
    }
    onLanguageSelect({ value: language }) {
        this.store.dispatch(Object(_core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_4__["actionSettingsChangeLanguage"])({ language }));
    }
    onThemeSelect({ value: theme }) {
        this.store.dispatch(Object(_core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_4__["actionSettingsChangeTheme"])({ theme }));
    }
    onAutoNightModeToggle({ checked: autoNightMode }) {
        this.store.dispatch(Object(_core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_4__["actionSettingsChangeAutoNightMode"])({ autoNightMode }));
    }
    onStickyHeaderToggle({ checked: stickyHeader }) {
        this.store.dispatch(Object(_core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_4__["actionSettingsChangeStickyHeader"])({ stickyHeader }));
    }
    onPageAnimationsToggle({ checked: pageAnimations }) {
        this.store.dispatch(Object(_core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_4__["actionSettingsChangeAnimationsPage"])({ pageAnimations }));
    }
    onElementsAnimationsToggle({ checked: elementsAnimations }) {
        this.store.dispatch(Object(_core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_4__["actionSettingsChangeAnimationsElements"])({ elementsAnimations }));
    }
};
SettingsContainerComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
SettingsContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'shaale-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings-container.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/features/settings/settings/settings-container.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings-container.component.scss */ "./src/app/features/settings/settings/settings-container.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
], SettingsContainerComponent);



/***/ })

}]);
//# sourceMappingURL=features-settings-settings-module-es2015.js.map