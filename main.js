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
		var e = new Error("Cannot find module '" + req + "'");
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

module.exports = "\r\n.loader\r\n{\r\n    background-image: url('/../assets/images/IMG_95596.png');\r\n}\r\n.loading{\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    -webkit-transform: translate(-50%,-50%);\r\n            transform: translate(-50%,-50%);\r\n    height: 40px;\r\n    display: flex;;\r\n    align-items: center;\r\n}\r\n.obj{\r\n    width: 5px;\r\n    height: 40px;\r\n    background: white;\r\n    margin: 0 3px;\r\n    border-radius: 10px;\r\n    -webkit-animation: loading 0.8s infinite;\r\n            animation: loading 0.8s infinite;\r\n}\r\n.obj:nth-child(2){\r\n    -webkit-animation-delay: 0.1s;\r\n            animation-delay: 0.1s;\r\n}\r\n.obj:nth-child(3){\r\n    -webkit-animation-delay: 0.2s;\r\n            animation-delay: 0.2s;\r\n}\r\n.obj:nth-child(4){\r\n    -webkit-animation-delay: 0.3s;\r\n            animation-delay: 0.3s;\r\n}\r\n.obj:nth-child(5){\r\n    -webkit-animation-delay: 0.4s;\r\n            animation-delay: 0.4s;\r\n}\r\n.obj:nth-child(6){\r\n    -webkit-animation-delay: 0.5s;\r\n            animation-delay: 0.5s;\r\n}\r\n.obj:nth-child(7){\r\n    -webkit-animation-delay: 0.6s;\r\n            animation-delay: 0.6s;\r\n}\r\n.obj:nth-child(8){\r\n    -webkit-animation-delay: 0.7s;\r\n            animation-delay: 0.7s;\r\n}\r\n@-webkit-keyframes loading{\r\n    0%{\r\n        height:0;\r\n    }\r\n    50%{\r\n        height: 40px;\r\n    }\r\n    100%{\r\n        height: 0;\r\n    }\r\n}\r\n@keyframes loading{\r\n    0%{\r\n        height:0;\r\n    }\r\n    50%{\r\n        height: 40px;\r\n    }\r\n    100%{\r\n        height: 0;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <input type=\"text\" [(ngModel)]=\"title\" placeholder=\"{{title}}\">\n  <input type=\"email\"placeholder=\"email.com\">\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul> -->\n<!-- <app-button></app-button> -->\n<router-outlet></router-outlet>\n<!-- <ngx-spinner \nbdColor=\"green\"\nsize=\"medium\"\ncolor=\"#fff\"\ntype=\"\">\n  <div class=\"loading\">\n    <div class=\"obj\"></div>\n    <div class=\"obj\"></div>\n    <div class=\"obj\"></div>\n    <div class=\"obj\"></div>\n    <div class=\"obj\"></div>\n    <div class=\"obj\"></div>\n    <div class=\"obj\"></div>\n    <div class=\"obj\"></div>\n  </div>\n</ngx-spinner> -->\n\n\n"

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
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(spinner) {
        this.spinner = spinner;
        this.title = 'date';
    }
    AppComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        //   this.spinner.show();
        //   setTimeout(() => {
        //     /** spinner ends after 5 seconds */
        //     this.spinner.hide();
        // }, 3000);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./button/button.component */ "./src/app/button/button.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _threed_threed_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./threed/threed.component */ "./src/app/threed/threed.component.ts");
/* harmony import */ var _slidershow_slidershow_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./slidershow/slidershow.component */ "./src/app/slidershow/slidershow.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashborad_dashborad_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashborad/dashborad.component */ "./src/app/dashborad/dashborad.component.ts");
/* harmony import */ var _eye_eye_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./eye/eye.component */ "./src/app/eye/eye.component.ts");
/* harmony import */ var _app_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../app/auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    { path: "", component: _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
    { path: "dashborad", component: _dashborad_dashborad_component__WEBPACK_IMPORTED_MODULE_12__["DashboradComponent"], canActivate: [_app_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]], children: [
            { path: "button", component: _button_button_component__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"] },
            { path: "search", component: _search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"] },
            { path: "3d", component: _threed_threed_component__WEBPACK_IMPORTED_MODULE_9__["ThreedComponent"] },
            { path: "slider", component: _slidershow_slidershow_component__WEBPACK_IMPORTED_MODULE_10__["SlidershowComponent"] }
        ] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _button_button_component__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"],
                _threed_threed_component__WEBPACK_IMPORTED_MODULE_9__["ThreedComponent"],
                _slidershow_slidershow_component__WEBPACK_IMPORTED_MODULE_10__["SlidershowComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _dashborad_dashborad_component__WEBPACK_IMPORTED_MODULE_12__["DashboradComponent"],
                _eye_eye_component__WEBPACK_IMPORTED_MODULE_13__["EyeComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)
            ],
            providers: [_app_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"], _user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(service, route, user) {
        this.service = service;
        this.route = route;
        this.user = user;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        // debugger
        //   if(!this.service.isLoggedIn){
        //   return true;
        // }
        return true;
        // return this.user.isLoggedIn().pipe(map(res =>{
        // if(res.status){
        //   this.service.setLoggedIn(true)
        //   return true
        // }else{
        //   this.route.navigate(['login'])
        //   return false
        // }
        // }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/button/button.component.css":
/*!*********************************************!*\
  !*** ./src/app/button/button.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\r\n\tposition: absolute;\r\n\ttop:50%;\r\n\tleft:50%;\r\n\t-webkit-transform: translate(-50%,-50%);\r\n\t        transform: translate(-50%,-50%);\r\n\twidth:200px;\r\n\theight: 60px;\r\n\ttext-align: center;\r\n\tline-height: 60px;\r\n\tcolor:#fff;\r\n\tfont-size: 24px;\r\n\ttext-transform: uppercase;\r\n\ttext-decoration: none;\r\n\tfont-family: sans-serif;\r\n\tbox-sizing: border-box;\r\n\tbackground: linear-gradient(90deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);\r\n\tbackground-size: 400%;border-radius: 30px;\r\n}\r\na:hover{\r\n\t-webkit-animation: animate 8s linear infinite;\r\n\t        animation: animate 8s linear infinite;\r\n\r\n}\r\n@-webkit-keyframes animate\r\n{\r\n\t0%{background-position: 0%;}\r\n\t100%{background-position: 400%;}\r\n}\r\n@keyframes animate\r\n{\r\n\t0%{background-position: 0%;}\r\n\t100%{background-position: 400%;}\r\n}\r\na:before{\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\ttop:-5px;\r\n\tleft: -5px;\r\n\tbottom: -5px;\r\n\tright: -5px;\r\n\tz-index: -1;\r\n\tbackground: linear-gradient(90deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);\r\n\tbackground-size: 400%;\r\n\tborder-radius: 30px;\r\n\t-webkit-filter: blur(20px);\r\n\t        filter: blur(20px);\r\n}\r\na:hover:before{\r\n\t-webkit-filter: blur(20px);\r\n\t        filter: blur(20px);\r\n\topacity: 2;\r\n\t-webkit-animation: animate 8s linear infinite;\r\n\t        animation: animate 8s linear infinite;\r\n}\r\n.button{\r\n    height: 100%;\r\n    background-color: black;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/button/button.component.html":
/*!**********************************************!*\
  !*** ./src/app/button/button.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  button works!\n</p> -->\n<div class=\"button\">\n  <a href=\"\">Button</a>\n</div>"

/***/ }),

/***/ "./src/app/button/button.component.ts":
/*!********************************************!*\
  !*** ./src/app/button/button.component.ts ***!
  \********************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
    }
    ButtonComponent.prototype.ngOnInit = function () {
    };
    ButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-button',
            template: __webpack_require__(/*! ./button.component.html */ "./src/app/button/button.component.html"),
            styles: [__webpack_require__(/*! ./button.component.css */ "./src/app/button/button.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/dashborad/dashborad.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashborad/dashborad.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".router-link-active{\r\n    color:red;\r\n}"

/***/ }),

/***/ "./src/app/dashborad/dashborad.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashborad/dashborad.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dashborad works!\n</p>\n<ul *ngFor=\"let serv of sevice\">\n  <li>{{serv}}</li>\n</ul>\n<a [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\" (click)=\"loder()\">logout</a>\n<a [routerLink]=\"['/dashborad/button']\" routerLinkActive=\"router-link-active\"(click)=\"loder()\" >button</a>\n<a [routerLink]=\"['//dashborad/3d']\" routerLinkActive=\"router-link-active\" (click)=\"loder()\">3D</a>\n<a [routerLink]=\"['//dashborad/slider']\" routerLinkActive=\"router-link-active\" (click)=\"loder()\">slider</a>\n<a [routerLink]=\"['//dashborad/search']\" routerLinkActive=\"router-link-active\" (click)=\"loder()\">search</a>\n<router-outlet></router-outlet>\n{{email}}\n\n<!-- <ngx-spinner >  \n  <div class=\"loading\">\n    <div class=\"obj\"></div>\n    <div class=\"obj\"></div>\n    <div class=\"obj\"></div>\n    <div class=\"obj\"></div>\n    <div class=\"obj\"></div>\n    <div class=\"obj\"></div>\n    <div class=\"obj\"></div>\n    <div class=\"obj\"></div>\n  </div> --\n</ngx-spinner> -->\n\n"

/***/ }),

/***/ "./src/app/dashborad/dashborad.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashborad/dashborad.component.ts ***!
  \**************************************************/
/*! exports provided: DashboradComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboradComponent", function() { return DashboradComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/service.service */ "./src/app/service/service.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboradComponent = /** @class */ (function () {
    // service=[
    //   {name:"adithya"},
    //   {name:"sai"},
    // ]
    function DashboradComponent(spinner, service, user) {
        this.spinner = spinner;
        this.service = service;
        this.user = user;
        this.sevice = ["adi", "sai"];
        this.email = "loading....";
    }
    DashboradComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user.getSomeData().subscribe(function (data) {
            _this.email = data.email;
            if (!data.success) {
                localStorage.removeItem('loggedIn');
            }
        });
    };
    DashboradComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashborad',
            template: __webpack_require__(/*! ./dashborad.component.html */ "./src/app/dashborad/dashborad.component.html"),
            styles: [__webpack_require__(/*! ./dashborad.component.css */ "./src/app/dashborad/dashborad.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"], _service_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], DashboradComponent);
    return DashboradComponent;
}());



/***/ }),

/***/ "./src/app/eye/eye.component.css":
/*!***************************************!*\
  !*** ./src/app/eye/eye.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".eye{\r\n\twidth: 200px;\r\n\theight: 200px;\r\n\tbackground: white;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\t-webkit-transform: translate(-50%,-50%) rotate(45deg);\r\n\t        transform: translate(-50%,-50%) rotate(45deg);\r\n\tborder-radius: 75% 0;\r\n\toverflow: hidden;\r\n\r\n\r\n}\r\n.ball{\r\n\twidth: 40px;height: 40px;\r\n\tbackground: #222f3e;\r\n\tborder-radius: 50%;\r\n\tborder:30px solid #576574;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\t-webkit-transform: translate(-50%,-50%);\r\n\t        transform: translate(-50%,-50%); \r\n}\r\n.shut{\r\n\twidth: 300px;\r\n\theight: 160px;\r\n\t/*background: black;*/\r\n\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\t-webkit-transform: translate(-50%,-50%) rotate(-45deg);\r\n\t        transform: translate(-50%,-50%) rotate(-45deg); \r\nz-index: 999;\r\n}\r\n.shut span{\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\theight: 15%;\r\n\tbackground: #ff6b6b;\r\n\tborder-radius:  0 0 60% 60%;\r\n\ttransition: 0.5s all;\r\n\t\r\n}\r\n.eye:hover > .shut span{\r\n\theight: 100%;\r\n}"

/***/ }),

/***/ "./src/app/eye/eye.component.html":
/*!****************************************!*\
  !*** ./src/app/eye/eye.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  eye works!\n</p>\n<div class=\"eye\">\n  <div class=\"shut\">\n    <span class=\"\"></span>\n  </div>\n  <div class=\"ball\"></div>\n</div>"

/***/ }),

/***/ "./src/app/eye/eye.component.ts":
/*!**************************************!*\
  !*** ./src/app/eye/eye.component.ts ***!
  \**************************************/
/*! exports provided: EyeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EyeComponent", function() { return EyeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EyeComponent = /** @class */ (function () {
    function EyeComponent() {
    }
    EyeComponent.prototype.ngOnInit = function () {
    };
    EyeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-eye',
            template: __webpack_require__(/*! ./eye.component.html */ "./src/app/eye/eye.component.html"),
            styles: [__webpack_require__(/*! ./eye.component.css */ "./src/app/eye/eye.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EyeComponent);
    return EyeComponent;
}());



/***/ }),

/***/ "./src/app/login.service.ts":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = /** @class */ (function () {
    function LoginService(httpclient) {
        this.httpclient = httpclient;
        this.loggedInStatus = false;
    }
    LoginService.prototype.setLoggedIn = function (value) {
        this.loggedInStatus = value;
        localStorage.setItem('loggedIn', 'true');
    };
    Object.defineProperty(LoginService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedInStatus;
        },
        enumerable: true,
        configurable: true
    });
    LoginService.prototype.getLogindetail = function (data) {
        return this.httpclient.post('http://13.126.153.109:8001/v1/Users/login', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error); }));
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginpage{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%,-50%);\r\n            transform: translate(-50%,-50%);\r\n    text-align: center;\r\n}\r\n.email{\r\n    height: 60px;\r\n}\r\n.password{\r\n    height: 60px;\r\n}\r\n.loginpage input[type=\"email\"] ,.loginpage input[type=\"password\"]{\r\n    padding: 10px;\r\n    width: 220px;\r\n    border: 2px solid ;\r\n    border-radius: 25px;\r\n    text-align: center;\r\n    outline: none;\r\n}\r\n.loginpage button[type=\"submit\"]{\r\n    padding: 10px;\r\n    border-radius: 29px;\r\n    width: 85px;\r\n    outline: none;\r\n}\r\n.loginpage .input-error-message{\r\n    color: red;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  login works!\n</p> -->\n<div class=\"loginpage\">\n  <form (ngSubmit)=\"onloginsubmit()\" [formGroup]=\"loginForm\">\n    <div class=\"email\">\n      <input type=\"email\" placeholder=\"Email\"formControlName=\"email\">\n      <span *ngIf=\"loginForm.get('email').touched&&loginForm.get('email').hasError('required')\"class=\"input-error-message\"> <i class=\"fas fa-exclamation-circle\"></i></span><br>\n      <span *ngIf=\"loginForm.get('email').touched&&loginForm.get('email').hasError('required')\"class=\"input-error-message\"> please enter a valid email address</span>\n      <span *ngIf=\"loginForm.get('email').touched&&loginForm.get('email').hasError('email')\"class=\"input-error-message\"> invalid email address</span>\n      </div>\n    <div class=\"password\">\n      <input type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n      <span *ngIf=\"loginForm.get('password').submit&&loginForm.get('password').hasError('required')\"class=\"input-error-message\"> <i class=\"fas fa-exclamation-circle\"></i></span><br>\n      <span *ngIf=\"loginForm.get('password').touched&&loginForm.get('password').hasError('required')\"class=\"input-error-message\"> please enter a valid Password address</span>\n    </div>\n      <button type=\"submit\">Login</button>\n  </form>\n</div>\n<!-- <ngx-spinner></ngx-spinner> -->"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginservice, router, spinner) {
        this.loginservice = loginservice;
        this.router = router;
        this.spinner = spinner;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    };
    LoginComponent.prototype.onloginsubmit = function () {
        var _this = this;
        var data = {
            email: this.loginForm.get('email').value,
            password: this.loginForm.get('password').value
        };
        this.loginservice.getLogindetail(data).subscribe(function (response) {
            console.log(response);
            if (response.statusCode === 200) {
                // console.log("login successful");
                _this.router.navigate(['dashborad']);
                _this.loginservice.setLoggedIn(true);
            }
            else {
                // alert("plase enter valid email and Password");
                _this.router.navigate(['dashborad']);
                _this.loginservice.setLoggedIn(true);
                console.log("error");
                // this.loginForm("error");
            }
        });
        // console.log(data);
        this.loginForm.reset();
        //   this.spinner.show();
        //   setTimeout(() => {
        //     /** spinner ends after 5 seconds */
        //     this.spinner.hide();
        // }, 2000);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".white-text{\r\n    color:white;\r\n}"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  search works!\n</p>\n<label>server name</label>\n<input type=\"text\" [(ngModel)]=\"serverName\">\n<!-- <input type=\"text\"class=\"form-control\" (input)=\"onUpdateServerName($event)\"> -->\n<!-- <p>{{serverName}}</p> -->\n<button class=\"btn\" [disabled]=\"!allowNewServer\" (click)=\"onCreateServer()\">signup</button>\n<!-- <p>{{allowNewServer}}</p> -->\n<p [innerText]=\"allowNewServer\"></p>\n<!-- <p>{{ serverCreationStatus }}</p> -->\n<p *ngIf=\"serverCreated; else noServer\">Server was created,server name is {{serverName}}</p>\n<!-- <ng-template #noServer>\n  <p>no Sever are created</p>\n</ng-template> -->\n<app-slidershow *ngFor=\"let server of servers\">{{server}}</app-slidershow>\n<hr>\n<button (click)=\"onToggleDetails()\">\n  Display Details\n</button>\n<p *ngIf=\"showSecret\">Secret password = tuna</p>\n<div *ngFor=\"let logItem of log; let i= index\"[ngStyle]=\"{backgroundColor:i >= 5 ? 'blue':'transparent'}\" [ngClass]=\"{'white-text':i >= 5}\">\n  {{logItem}}\n</div>\n<!-- <ngx-spinner></ngx-spinner> -->\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
        var _this = this;
        this.allowNewServer = false;
        this.serverCreationStatus = 'NO server was created!';
        this.serverName = "testserver";
        this.serverCreated = false;
        this.servers = ['Testserver', 'Testserver 2'];
        this.log = [];
        this.showSecret = false;
        setTimeout(function () {
            _this.allowNewServer = true;
        }, 2000);
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.onCreateServer = function () {
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = 'server was created!' + this.serverName;
        // alert(this.serverName);
    };
    SearchComponent.prototype.onUpdateServerName = function (event) {
        // console.log(event);
        this.serverName = event.target.value;
    };
    SearchComponent.prototype.onToggleDetails = function () {
        this.showSecret = !this.showSecret;
        // this.log.push(this.log.le ngth +1);
        this.log.push(new Date());
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/service/service.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/service.service.ts ***!
  \********************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServiceService = /** @class */ (function () {
    function ServiceService() {
    }
    ServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ServiceService);
    return ServiceService;
}());



/***/ }),

/***/ "./src/app/slidershow/slidershow.component.css":
/*!*****************************************************!*\
  !*** ./src/app/slidershow/slidershow.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".online{\r\n    color:white;\r\n}"

/***/ }),

/***/ "./src/app/slidershow/slidershow.component.html":
/*!******************************************************!*\
  !*** ./src/app/slidershow/slidershow.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p [ngStyle]=\"{backgroundColor:getColor()}\"[ngClass]=\"{online:serverStatus ==='online'}\">{{'Server'}} with ID {{serverId}} is {{ getServerStatus() }}</p>\n"

/***/ }),

/***/ "./src/app/slidershow/slidershow.component.ts":
/*!****************************************************!*\
  !*** ./src/app/slidershow/slidershow.component.ts ***!
  \****************************************************/
/*! exports provided: SlidershowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidershowComponent", function() { return SlidershowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SlidershowComponent = /** @class */ (function () {
    function SlidershowComponent() {
        // serverCreationStatus='NO server was created!';
        // serverName="testserver";
        this.serverId = 10;
        this.serverStatus = 'offline';
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }
    SlidershowComponent.prototype.getServerStatus = function () {
        return this.serverStatus;
    };
    SlidershowComponent.prototype.getColor = function () {
        return this.serverStatus === 'online' ? 'green' : 'red';
    };
    SlidershowComponent.prototype.ngOnInit = function () {
    };
    SlidershowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slidershow',
            template: __webpack_require__(/*! ./slidershow.component.html */ "./src/app/slidershow/slidershow.component.html"),
            styles: [__webpack_require__(/*! ./slidershow.component.css */ "./src/app/slidershow/slidershow.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SlidershowComponent);
    return SlidershowComponent;
}());



/***/ }),

/***/ "./src/app/threed/threed.component.css":
/*!*********************************************!*\
  !*** ./src/app/threed/threed.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/threed/threed.component.html":
/*!**********************************************!*\
  !*** ./src/app/threed/threed.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  threed works!\n</p>\n"

/***/ }),

/***/ "./src/app/threed/threed.component.ts":
/*!********************************************!*\
  !*** ./src/app/threed/threed.component.ts ***!
  \********************************************/
/*! exports provided: ThreedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreedComponent", function() { return ThreedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThreedComponent = /** @class */ (function () {
    function ThreedComponent() {
    }
    ThreedComponent.prototype.ngOnInit = function () {
    };
    ThreedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-threed',
            template: __webpack_require__(/*! ./threed.component.html */ "./src/app/threed/threed.component.html"),
            styles: [__webpack_require__(/*! ./threed.component.css */ "./src/app/threed/threed.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ThreedComponent);
    return ThreedComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getSomeData = function () {
        return this.http.get('http://13.126.153.109:8001/v1/Users/login');
    };
    UserService.prototype.isLoggedIn = function () {
        return this.http.get('http://13.126.153.109:8001/v1/Users/signup');
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\mydate\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map