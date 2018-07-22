(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Example 0</h1>\r\n<app-example0></app-example0>\r\n\r\n<h1>Example 1</h1>\r\n<app-example01></app-example01>\r\n\r\n<h1>Example 2</h1>\r\n<app-example02></app-example02>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _example01_example01_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./example01/example01.component */ "./src/app/example01/example01.component.ts");
/* harmony import */ var _example02_example02_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./example02/example02.component */ "./src/app/example02/example02.component.ts");
/* harmony import */ var _example0_example0_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./example0/example0.component */ "./src/app/example0/example0.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _example01_example01_component__WEBPACK_IMPORTED_MODULE_4__["Example01Component"],
                _example02_example02_component__WEBPACK_IMPORTED_MODULE_5__["Example02Component"],
                _example0_example0_component__WEBPACK_IMPORTED_MODULE_6__["Example0Component"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/example0/example0.component.css":
/*!*************************************************!*\
  !*** ./src/app/example0/example0.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/example0/example0.component.html":
/*!**************************************************!*\
  !*** ./src/app/example0/example0.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p [@ani]=\"{ value: ':enter', params: { color: 'green'}}\">\n  example0 works!\n</p>\n"

/***/ }),

/***/ "./src/app/example0/example0.component.ts":
/*!************************************************!*\
  !*** ./src/app/example0/example0.component.ts ***!
  \************************************************/
/*! exports provided: Example0Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example0Component", function() { return Example0Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Example0Component = /** @class */ (function () {
    function Example0Component() {
    }
    Example0Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-example0',
            template: __webpack_require__(/*! ./example0.component.html */ "./src/app/example0/example0.component.html"),
            styles: [__webpack_require__(/*! ./example0.component.css */ "./src/app/example0/example0.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('ani', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ color: '{{color}}' }), { params: { color: '' } }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(1500))
                ])
            ]
        })
    ], Example0Component);
    return Example0Component;
}());



/***/ }),

/***/ "./src/app/example01/example01.component.css":
/*!***************************************************!*\
  !*** ./src/app/example01/example01.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wp {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    background-color: #ddddddee;\r\n}\r\n\r\n\r\n.wp div {\r\n    width: 100px;\r\n    height: 100px;\r\n    background-color: black;\r\n    box-shadow: 0 1px 5px 0 black;\r\n    margin: 10px;\r\n}"

/***/ }),

/***/ "./src/app/example01/example01.component.html":
/*!****************************************************!*\
  !*** ./src/app/example01/example01.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wp\">\n  <div \n    *ngFor=\"let i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\" \n    [@node]=\"{value: ':enter', params: { delay: (i * 300) } }\"\n    ></div>\n</div>"

/***/ }),

/***/ "./src/app/example01/example01.component.ts":
/*!**************************************************!*\
  !*** ./src/app/example01/example01.component.ts ***!
  \**************************************************/
/*! exports provided: Example01Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example01Component", function() { return Example01Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Example01Component = /** @class */ (function () {
    function Example01Component() {
    }
    Example01Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-example01',
            template: __webpack_require__(/*! ./example01.component.html */ "./src/app/example01/example01.component.html"),
            styles: [__webpack_require__(/*! ./example01.component.css */ "./src/app/example01/example01.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('node', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ 'transform': 'scale(0)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms {{delay}}ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ offset: .6, 'transform': 'scale(1.2)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ offset: .85, 'transform': 'scale(.9)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ offset: 1, 'transform': 'scale(1)' }),
                        ]))
                    ], { params: { delay: 1 } })
                ])
            ]
        })
    ], Example01Component);
    return Example01Component;
}());



/***/ }),

/***/ "./src/app/example02/example02.component.css":
/*!***************************************************!*\
  !*** ./src/app/example02/example02.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wp {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    background-color: #ddddddee;\r\n}\r\n\r\n\r\n.wp div {\r\n    width: 100px;\r\n    height: 100px;\r\n    background-color: black;\r\n    box-shadow: 0 1px 5px 0 black;\r\n    margin: 10px;\r\n}"

/***/ }),

/***/ "./src/app/example02/example02.component.html":
/*!****************************************************!*\
  !*** ./src/app/example02/example02.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wp\">\n  <div\n    *ngFor=\"let i of nodes; index as ind\"\n    [@nodes]=\"i\"\n    (click)=\"toggle(ind)\"></div>\n</div>"

/***/ }),

/***/ "./src/app/example02/example02.component.ts":
/*!**************************************************!*\
  !*** ./src/app/example02/example02.component.ts ***!
  \**************************************************/
/*! exports provided: Example02Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example02Component", function() { return Example02Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Example02Component = /** @class */ (function () {
    function Example02Component() {
        this.nodes = [
            { value: '', params: { color: 'green', transform1: 'rotate(-20deg)', transform0: 'rotate(0)' } },
            { value: '', params: { color: 'tomato', transform1: 'scale(.9)', transform0: 'scale(1)' } },
            { value: '', params: { color: 'white', transform1: 'translateX(20px)', transform0: 'translateX(0)' } },
            { value: '', params: { color: 'blue', transform1: 'translateY(20px)', transform0: 'translateY(0)' } },
        ];
    }
    Example02Component.prototype.toggle = function (i) {
        this.nodes[i] = { value: 'change', params: this.nodes[i].params };
    };
    Example02Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-example02',
            template: __webpack_require__(/*! ./example02.component.html */ "./src/app/example02/example02.component.html"),
            styles: [__webpack_require__(/*! ./example02.component.css */ "./src/app/example02/example02.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('nodes', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => change', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ offset: 0, 'background-color': 'black', 'transform': '{{transform0}}' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ offset: .5, 'background-color': '{{color}}', 'transform': '{{transform1}}' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ offset: 1, 'background-color': 'black', 'transform': '{{transform0}}' }),
                        ]))
                    ], { params: { color: '', transform0: '', transform1: '' } })
                ])
            ]
        })
    ], Example02Component);
    return Example02Component;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\matheus\Desktop\angularDynamicAnimations\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map