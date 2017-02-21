webpackJsonp([0,10],{

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_routing_module__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_component__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aboutsite_aboutsite_component__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aboutme_aboutme_component__ = __webpack_require__(692);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AboutModule = (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__about_routing_module__["a" /* AboutRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__about_component__["a" /* AboutComponent */], __WEBPACK_IMPORTED_MODULE_4__aboutsite_aboutsite_component__["a" /* AboutsiteComponent */], __WEBPACK_IMPORTED_MODULE_5__aboutme_aboutme_component__["a" /* AboutmeComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutModule);
    return AboutModule;
}());
//# sourceMappingURL=C:/Users/Saabir/Documents/saabirmohamed/src/about.module.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__(709),
            styles: [__webpack_require__(700)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=C:/Users/Saabir/Documents/saabirmohamed/src/about.component.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_component__ = __webpack_require__(684);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__about_component__["a" /* AboutComponent */],
        data: {
            meta: {
                title: 'About me',
                description: 'Information about me and what I do'
            }
        } }
];
var AboutRoutingModule = (function () {
    function AboutRoutingModule() {
    }
    AboutRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AboutRoutingModule);
    return AboutRoutingModule;
}());
//# sourceMappingURL=C:/Users/Saabir/Documents/saabirmohamed/src/about-routing.module.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutmeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutmeComponent = (function () {
    function AboutmeComponent() {
    }
    AboutmeComponent.prototype.ngOnInit = function () {
    };
    AboutmeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-aboutme',
            template: __webpack_require__(710),
            styles: [__webpack_require__(701)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutmeComponent);
    return AboutmeComponent;
}());
//# sourceMappingURL=C:/Users/Saabir/Documents/saabirmohamed/src/aboutme.component.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutsiteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutsiteComponent = (function () {
    function AboutsiteComponent() {
    }
    AboutsiteComponent.prototype.ngOnInit = function () {
    };
    AboutsiteComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-aboutsite',
            template: __webpack_require__(711),
            styles: [__webpack_require__(702)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutsiteComponent);
    return AboutsiteComponent;
}());
//# sourceMappingURL=C:/Users/Saabir/Documents/saabirmohamed/src/aboutsite.component.js.map

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = ".animateIn {\r\n  -webkit-animation: moveIn 2s forwards;\r\n          animation: moveIn 2s forwards;\r\n  -webkit-animation: FadeIn 5s forwards;\r\n          animation: FadeIn 5s forwards;\r\n}\r\n\r\n@-webkit-keyframes moveIn {\r\n  0% {\r\n    opacity: 0;\r\n    margin-left: 150px;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    margin-left: 0;\r\n  }\r\n}\r\n\r\n@keyframes moveIn {\r\n  0% {\r\n    opacity: 0;\r\n    margin-left: 150px;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    margin-left: 0;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes FadeIn {\r\n  0% {\r\n    opacity: 0;\r\n    \r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    \r\n  }\r\n}\r\n\r\n@keyframes FadeIn {\r\n  0% {\r\n    opacity: 0;\r\n    \r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    \r\n  }\r\n}\r\n\r\n"

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = "H2, H3, H4  {\r\n    text-shadow: 1px 1px 1px #000, -1px -1px 1px #000,\r\n                 2px 2px 5px #000, -2px -2px 5px #000 !important;\r\n    /*color: darkorange;*/\r\n    color: #ccc;\r\n    font-weight: bold;\r\n    \r\n}"

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = "H2, H3, H4  {\r\n    text-shadow: 1px 1px 1px #000, -1px -1px 1px #000,\r\n                 2px 2px 5px #000, -2px -2px 5px #000 !important;\r\n    /*color: darkorange;*/\r\n    color: #ccc;\r\n    font-weight: bold;\r\n    \r\n}\r\n"

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = "<div class=\"row animateIn\">\n        <div class=\"col-sm-6\">\n           <app-aboutme></app-aboutme>\n        </div>\n\n        <div class=\"col-sm-6\">\n           <app-aboutsite></app-aboutsite>\n        </div>\n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = "<hr>\n                <h3>About me</h3>\n              <hr>\n              <p>\n                An independent developer specializing in web and mobile SPA applications.\n                I develope websites games and apps for work and for fun.\n              </p>\n              <p>I love learning new technologies and building stuff with them.</p>\n              <p>Been coding since 1997 and used many languages over the years but now specializing in a few.</p>\n              <hr>\n              <h3>Operating systems</h3>\n              <p>I love, use and experiment on them all (windows, linux, OSX).</p>\n              <hr>\n\n              <h4>My Playground  (Languages and Libraries)</h4>\n              <hr>\n              <h3>Front end:</h3>\n              <p>Angular 2 onward...</p>\n              <p>React</p>\n              <p>Java</p>\n              <p>Vanilla JavaScript</p>\n              <p>CSS</p>\n              <p>ionic 2</p>\n              <p>Electron (Angular)</p>\n              <p>Unity C# or JavaScript</p>\n              <hr>\n\n              <h3>Back end:</h3>\n              <p>Golang</p>\n              <p>Php</p>\n              <p>Firebase</p>\n              <p>MySql</p>\n              <p>MSSQL</p>\n\n\n              <hr>\n\n              <h3>My Workflow</h3>\n              <p>npm</p>\n              <p>yarn</p>\n              <p>Angular cli</p>\n              <p>ionic cli</p>\n              <p>Github</p>\n              <p>yeoman</p>\n              <p>webpack</p>\n              <p>gulp</p>\n              <p>Docker</p>"

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = "<hr>\n                <h3>About this Site</h3>\n              <hr>\n              <h4>Technologies</h4>\n              \n              <p>\n              \n                \n                  Developed using Angular 2.3.1 and Angular Router 3.3.1, Bootswatch for styles, \n                  firebase and golang server api's for auth and data. Project is scafolded using angular 2 cli, and coded in typescript <br><br>\n                  <img width=\"50\" height=\"50\" src=\"../../../../assets/angular.png\" alt=\"\">\n                 <img width=\"50\" height=\"50\" src=\"../../../../assets/ts.png\" alt=\"\">\n                 <img width=\"50\" height=\"50\" src=\"../../../../assets/bootswatch_1x.png\" alt=\"\">\n                 <img width=\"50\" height=\"50\" src=\"../../../../assets/firebase-01.png\" alt=\"\">\n                 <img width=\"50\" height=\"50\" src=\"../../../../assets/gopher.png\" alt=\"\">\n                  <img width=\"50\" height=\"50\" src=\"../../../../assets/json.jpg\" alt=\"\">\n              </p>\n              <hr>\n              <h4>Features</h4>\n              <p>\n                 Each menu Link on this site is actually an Angular module which is lazy loaded on click.<br>\n                 I just think thats sooo awesome !\n                 \n              </p>\n              <hr>\n              <h4>plans and updates</h4>\n              <p>\n                 If I like something cool a feature or optimization, I will use it here. \n              </p>"

/***/ })

});
//# sourceMappingURL=0.bundle.map