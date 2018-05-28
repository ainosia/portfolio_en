webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-layout></app-layout>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_projects_service__ = __webpack_require__("../../../../../src/app/services/projects.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_ps) {
        this._ps = _ps;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_projects_service__["a" /* ProjectsService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_projects_service__ = __webpack_require__("../../../../../src/app/services/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_intro_intro_component__ = __webpack_require__("../../../../../src/app/components/intro/intro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_projects_projects_component__ = __webpack_require__("../../../../../src/app/components/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_project_project_component__ = __webpack_require__("../../../../../src/app/components/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_skills_skills_component__ = __webpack_require__("../../../../../src/app/components/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_layout_layout_component__ = __webpack_require__("../../../../../src/app/components/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import {APP_BASE_HREF} from '@angular/common';
// Rutas

// Servicios

// Componentes










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_intro_intro_component__["a" /* IntroComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_project_project_component__["a" /* ProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_skills_skills_component__["a" /* SkillsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_layout_layout_component__["a" /* LayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routes__["a" /* app_routing */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__services_projects_service__["a" /* ProjectsService */]
                // { provide: APP_BASE_HREF, useValue : '/' }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return app_routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_index__ = __webpack_require__("../../../../../src/app/components/index.ts");


var app_routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__components_index__["a" /* HomeComponent */] },
    { path: 'project/:id', component: __WEBPACK_IMPORTED_MODULE_1__components_index__["b" /* ProjectComponent */] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
var app_routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(app_routes);


/***/ }),

/***/ "../../../../../src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"about_me\" class=\"stick padding-section grey-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-6\">\n        <header>\n          <h2>About <span class=\"hand-written\">me</span></h2>\n        </header>\n        <div class=\"divider\"></div>\n        <q>\n          I may not know how to do something at first, but rest assured that I will learn how to do it in short\n        </q>\n        <p>\n          Hi, I'm Sonia Villa.\n        </p>\n        <p>\n          After several years working in management positions (first in London and afterwards in Madrid), mainly in development departments, I changed my mind and decided to join the developers crew.\n        </p>\n        <p>\n          At the beginning, I only used to help out with simple tasks and learn in a self-taught way, but after a while, I started taking training courses to be able to carry out more complex tasks.\n        </p>\n        <p>\n          Almost fifteen years later, after endless hours in front of the computer, many courses taken and two careers, I work as a web developer in a startup.\n        </p>\n        <p>\n          I am addicted to reading, to the T.V. series and to chocolate and, in order to relax, I play basketball, go swimming or crochet <i>amigurumis</i>.\n        </p>\n        <p>\n          A couple of years ago I discovered robotics and also do my first steps with Arduino. Next goal: learn Python.\n        </p>\n      </div>\n      <div class=\"col-md-6 col-sm-6 img_programming\">\n        <img src=\"assets/img/graphic/programming.svg\" alt=\"Programmer\">\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/components/about/about.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n  <section id=\"contacto\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <img src=\"assets/img/basic/logo-icon-100.svg\" alt=\"Logo\" class=\"logo\">\n          <p>&#169; {{ year }} {{ name }}</p>\n        </div>\n        <div class=\"col-md-6 email\">\n          <a href=\"mailto:ainosia@gmail.com\">{{ email }}</a>\n        </div>\n      </div>\n    </div>\n  </section>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.year = new Date().getFullYear();
        this.name = "Sonia Villa";
        this.email = "ainosia@gmail.com";
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: []
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"menu\">\n  <a [routerLink]=\"['/projects']\"><img src=\"assets/img/basic/logo.svg\" alt=\"Logo\"></a>\n  <a [routerLink]=\"['/']\" class=\"menu-trigger\">&#9776;</a>\n  <ul>\n    <li>\n      <a\n        [routerLink]=\"['/projects']\"\n        fragment=\"projects\"\n        class=\"move\"\n        data-nivel=\"#projects\">\n        <i class=\"fas fa-code-branch\"></i>\n        Projects\n      </a>\n    </li>\n    <li>\n      <a\n        [routerLink]=\"['/skills']\"\n        fragment=\"skills\"\n        class=\"move\"\n        data-nivel=\"#skills_main\">\n        <i class=\"far fa-lightbulb\"></i>\n        Skills\n      </a>\n    </li>\n    <li>\n      <a\n        [routerLink]=\"['/about_me']\"\n        fragment=\"about_me\"\n        class=\"move\"\n        data-nivel=\"#about_me\">\n        <i class=\"fas fa-street-view\"></i>\n        About me\n      </a>\n    </li>\n    <li>\n      <a href=\"assets/docs/cv_SoniaVilla_en.pdf\" download=\"CV.pdf\">\n        <i class=\"far fa-file-pdf\"></i>\n        CV\n      </a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n  <app-projects></app-projects>\n  <app-skills></app-skills>\n  <app-about></app-about>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_project_component__ = __webpack_require__("../../../../../src/app/components/project/project.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__project_project_component__["a"]; });




/***/ }),

/***/ "../../../../../src/app/components/intro/intro.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"intro\" class=\"text-center animatedIntro fadeIn\">\n  <div class=\"container top\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <h1 class=\"main animated slideInUp\"><code><</code>Sonia Villa<code>/></code></h1>\n      </div>\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/components/intro/intro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroComponent = /** @class */ (function () {
    function IntroComponent() {
    }
    IntroComponent.prototype.ngOnInit = function () {
    };
    IntroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-intro',
            template: __webpack_require__("../../../../../src/app/components/intro/intro.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-intro *ngIf=\"router.url === '/home'\"></app-intro>\n<!-- <app-intro *ngIf=\"router.url.indexOf('/project/pr-')\"></app-intro> -->\n<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(router) {
        this.router = router;
    }
    LayoutComponent.prototype.ngOnInit = function () {
        $(window).on('scroll', scrollEffects);
        var levelIntro, isSticky = false, depth;
        $(document).ready(function () {
            // sistema de desplazamiento vertical
            $('.move').on('click', navigate);
            // Calculate target depth
            levelIntro = $('.stick').offset().top - $('.menu').innerHeight();
        });
        function scrollEffects() {
            depth = $(window).scrollTop();
            $('.reveal').each(function () {
                if (depth >= $(this).offset().top - $(window).innerHeight() / 2) {
                    var objReveal_1 = $(this);
                    setTimeout(function () {
                        objReveal_1.addClass('visible');
                    }, $(this).data('delay'));
                }
            });
            // Sticky menu
            if (levelIntro <= depth) {
                if (!isSticky) {
                    fixMenu(true);
                }
            }
            else {
                if (isSticky) {
                    fixMenu(false);
                }
            }
        }
        function fixMenu(fix) {
            if (fix) {
                $('.menu').css({ position: 'fixed', top: 0, left: 0 });
                $('#projects').css({ marginTop: $('.menu').innerHeight() });
                isSticky = true;
            }
            else {
                $('.menu').css('position', 'static');
                $('#projects').css({ marginTop: 0 });
                isSticky = false;
            }
        }
        function navigate(e) {
            e.preventDefault();
            var depth = $($(this).data('nivel')).offset().top;
            var distanciaAbs = Math.abs($(window).scrollTop() - depth);
            $('body, html').animate({
                scrollTop: depth
            }, distanciaAbs * .4);
        }
        // Responsive Menu
        $(document).ready(function () {
            $('.menu-trigger').click(function () {
                $('nav ul').slideToggle(768);
                $('nav ul').css({ position: 'fixed' });
            });
            $('nav ul li').click(function () {
                if ($(window).width() < 768) {
                    $('nav ul').css('display', 'none');
                }
            });
            $(window).resize(function () {
                if ($(window).width() >= 768) {
                    $('nav ul').css('display', 'none');
                }
            });
        });
    };
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-layout',
            template: __webpack_require__("../../../../../src/app/components/layout/layout.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/project/project.component.html":
/***/ (function(module, exports) {

module.exports = "<main id=\"project\" class=\"stick\">\n  <div *ngIf=\"project\">\n    <section class=\"grey-section animated fadeIn\">\n      <!-- assets/img/projects/{{ code }}/main.png -->\n      <div\n        [ngStyle]=\"{ 'background-image':'url(assets/img/projects/'+ code +'/main.png)' }\"\n        class=\"row cover_img\">\n        <header>\n          <h1>{{ project.title }}</h1>\n          <h2>{{ project.tech }}</h2>\n        </header>\n      </div>\n    </section>\n\n    <section class=\"padding-section\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-6 col-sm-6\">\n            <header>\n              <h2>{{ project.remark }} <span class=\"hand-written\">{{ project.subtitle }}</span></h2>\n            </header>\n            <div class=\"divider\"></div>\n            <p>{{ project.desc1 }}</p>\n            <p>{{ project.desc2 }}</p>\n            <p *ngIf=\"project.url\" class=\"git\">\n              <i class=\"fab fa-github\"></i><a href=\"{{ project.url }}\" target=\"_blank\">{{ project.url }}</a>\n            </p>\n          </div>\n          <div class=\"col-md-6 col-sm-6\">\n            <img src=\"assets/img/projects/{{ code }}/pic-1.png\" alt=\"{{ project.title }} image\">\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"grey-section\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-xs-12 content_centered\">\n            <img src=\"assets/img/projects/{{ code }}/main.png\" alt=\"{{ project.title }} image\">\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/components/project/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_projects_service__ = __webpack_require__("../../../../../src/app/services/projects.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(route, _ps) {
        var _this = this;
        this.route = route;
        this._ps = _ps;
        this.project = undefined;
        this.code = undefined;
        route.params.subscribe(function (param) {
            _ps.loadProject(param['id']).subscribe(function (res) {
                _this.code = param['id'];
                _this.project = res.json();
            });
        });
    }
    ProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-project',
            template: __webpack_require__("../../../../../src/app/components/project/project.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_projects_service__["a" /* ProjectsService */]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"projects\" class=\"stick padding-section grey-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <header>\n          <h2>Latest <span class=\"hand-written\">projects</span></h2>\n          <div class=\"divider\"></div>\n        </header>\n      </div>\n    </div>\n\n    <div class=\"overlay\" *ngIf=\"_ps.loading\">\n      <div class=\"spinner\"></div>\n    </div>\n\n    <div *ngIf=\"_ps.projects.length > 0 && !_ps.loading\" class=\"ae-masonry ae-masonry-md-2 ae-masonry-xl-5 animated fadeIn\">\n      <a *ngFor=\"let project of _ps.projects\"\n        [routerLink]=\"['/project', project.code]\"\n        class=\"rk-item ae-masonry__item\">\n        <img src=\"assets/img/projects/{{ project.code }}/main.png\" alt=\"{{ project.title }} image\">\n        <div class=\"item-meta\">\n          <h2>{{ project.title }}</h2>\n          <p>{{ project.tech }}</p>\n        </div>\n      </a>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_projects_service__ = __webpack_require__("../../../../../src/app/services/projects.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(_ps) {
        this._ps = _ps;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projects',
            template: __webpack_require__("../../../../../src/app/components/projects/projects.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_projects_service__["a" /* ProjectsService */]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"skills_main\" class=\"stick\">\r\n  <div id=\"skills_intro\" class=\"padding-section\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <header>\r\n            <h2>Web <span class=\"hand-written\">development</span></h2>\r\n            <div class=\"divider\"></div>\r\n          </header>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <article>\r\n            <h5>\r\n              <i class=\"fas fa-desktop\"></i>\r\n              <i class=\"fas fa-tablet-alt\"></i>\r\n              <i class=\"fas fa-mobile-alt\"></i>\r\n              Responsive <span class=\"hand-written\">web design</span>\r\n            </h5>\r\n            <p>\r\n              Reduces the cost of development and maintenance of apps significantly, compared to other solutions, such as native apps.\r\n            </p>\r\n          </article>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <article>\r\n            <h5>\r\n              <i class=\"fas fa-code\"></i>\r\n              Semantic <span class=\"hand-written\">web</span>\r\n            </h5>\r\n            <p>\r\n              Users find answers to their questions easily and quickly thanks to better defined information.\r\n            </p>\r\n          </article>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <article>\r\n            <h5>\r\n              <i class=\"fas fa-hand-point-up\"></i>\r\n              Usability</h5>\r\n            <p>\r\n              User-centered design, which makes possible for users to interact with apps in an easier, more comfortable and intuitive way.\r\n            </p>\r\n          </article>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <article>\r\n            <h5>\r\n              <span class=\"icon w3c\">Accessibility</span>\r\n            </h5>\r\n            <p>\r\n              Allows people with disabilities or with different needs to perceive, understand, navigate and interact with the Web.\r\n            </p>\r\n          </article>\r\n        </div>\r\n\r\n        <div class=\"col-md-8\">\r\n          <article>\r\n            <h5>\r\n              <i class=\"fab fa-firefox\"></i>\r\n              <i class=\"fab fa-chrome\"></i>\r\n              <i class=\"fab fa-internet-explorer\"></i>\r\n              <i class=\"fab fa-safari\"></i>\r\n              <i class=\"fab fa-opera\"></i>\r\n              Cross-browser <span class=\"hand-written\">compatibility</span>\r\n            </h5>\r\n            <p>\r\n              Apps are displayed in a very similar way in all browsers. To achieve this, the development is done in compliance with web standards, so that any current or future browser that meets these standards will display the pages correctly.\r\n            </p>\r\n          </article>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"skills\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-3 col-md-6 elemento\">\r\n          <article class=\"marco reveal\" data-delay=\"0\">\r\n              <i class=\"fab fa-earlybirds\"></i>\r\n              <div class=\"numero\">> 15</div>\r\n              <h5>Years of experience</h5>\r\n            </article>\r\n        </div>\r\n\r\n        <div class=\"col-lg-3 col-md-6 elemento\">\r\n          <article class=\"marco reveal\" data-delay=\"200\">\r\n              <i class=\"fas fa-code-branch\"></i>\r\n              <div class=\"numero\">> 50</div>\r\n              <h5>Fulfilled projects</h5>\r\n            </article>\r\n        </div>\r\n\r\n        <div class=\"col-lg-3 col-md-6 elemento\">\r\n          <article class=\"marco reveal\" data-delay=\"400\">\r\n              <i class=\"fab fa-usb\"></i>\r\n              <div class=\"numero\">> 20</div>\r\n              <h5>Technologies used</h5>\r\n            </article>\r\n        </div>\r\n\r\n        <div class=\"col-lg-3 col-md-6 elemento\">\r\n          <article class=\"marco reveal\" data-delay=\"600\">\r\n              <i class=\"far fa-file-code\"></i>\r\n              <div class=\"numero numero_big\">&infin;</div>\r\n              <h5>Lines of code</h5>\r\n            </article>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"skills_programming\" class=\"padding-section grey-section\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 col-sm-6\">\r\n          <header>\r\n            <h2>Technologies</h2>\r\n          </header>\r\n          <div class=\"divider\"></div>\r\n          <ul>\r\n            <li>HTML</li>\r\n            <li>CSS</li>\r\n            <li>JavaScript</li>\r\n            <li>ES6</li>\r\n            <li>TypeScript</li>\r\n            <li>Angular</li>\r\n            <li>JQuery</li>\r\n            <li>PHP</li>\r\n            <li>WordPress</li>\r\n            <li>Git</li>\r\n            <li>Bootstrap</li>\r\n            <li>Sass</li>\r\n            <li>Ionic</li>\r\n            <li>Node</li>\r\n          </ul>\r\n        </div>\r\n        <div id=\"tech\" class=\"col-md-6 col-sm-6\">\r\n          <img src=\"assets/img/graphic/tech.svg\" alt=\"Technologies\" class=\"animated reveal\" data-delay=\"400\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"skills_description\" class=\"padding-section border-bottom\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <header>\r\n            <h2>Adobe <span class=\"hand-written\">tools</span></h2>\r\n            <div class=\"divider\"></div>\r\n          </header>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 col-sm-6 claimbar\">\r\n            <img src=\"assets/img/graphic/adobe_logo.svg\" alt=\"Adobe Logo\">\r\n        </div>\r\n\r\n        <div class=\"col-md-8 col-sm-6 barras reveal\">\r\n          <p>Photoshop <span class=\"pull-right\">100</span></p>\r\n          <div class=\"progress100\"></div>\r\n\r\n          <p>Illustrator <span class=\"pull-right\">100</span></p>\r\n          <div class=\"progress100\"></div>\r\n\r\n          <p>Premiere <span class=\"pull-right\">80</span></p>\r\n          <div class=\"progress80\"></div>\r\n\r\n          <p>After Effects <span class=\"pull-right\">70</span></p>\r\n          <div class=\"progress70\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-skills',
            template: __webpack_require__("../../../../../src/app/components/skills/skills.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/projects.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsService = /** @class */ (function () {
    function ProjectsService(http) {
        this.http = http;
        this.projects = [];
        this.loading = true;
        this.loadProjects();
    }
    ProjectsService.prototype.loadProjects = function () {
        var _this = this;
        this.loading = true;
        this.http.get('https://porfolioangularidiomas.firebaseio.com/en_projects_idx.json')
            .subscribe(function (res) {
            _this.loading = false;
            _this.projects = res.json();
        });
    };
    ProjectsService.prototype.loadProject = function (code) {
        return this.http.get("https://porfolioangularidiomas.firebaseio.com/en_projects/" + code + ".json");
    };
    ProjectsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ProjectsService);
    return ProjectsService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map