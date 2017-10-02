webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__paquete_paquete__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bebidas_bebidas__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.root = __WEBPACK_IMPORTED_MODULE_4__paquete_paquete__["a" /* PaquetePage */];
        this.menuOpc = [
            { label: 'Inicio', icon: 'home' },
            { label: 'Notificaciones', icon: 'notifications' },
            { label: 'Lista de deseos', icon: 'heart' },
            { label: 'Mi cuenta', icon: 'contact' },
            { label: 'Información', icon: 'information-circle' }
        ];
    }
    HomePage.prototype.setContent = function (index) {
        if (index == 0) {
            this.root = __WEBPACK_IMPORTED_MODULE_4__paquete_paquete__["a" /* PaquetePage */];
        }
        else {
            this.root = __WEBPACK_IMPORTED_MODULE_5__bebidas_bebidas__["a" /* BebidasPage */];
        }
    };
    HomePage.prototype.logout = function () {
        this.storage.set("logged", false);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"F:\UNICAUCA\00_MOVILES-Dario Fernando Chamorro Vela\000_Proyecto_VacationSearch\VacationSearch\src\pages\home\home.html"*/'<ion-split-pane when="lg">\n\n  <ion-menu [content]="content">\n\n\n\n    <ion-list no-lines>\n\n      <ion-list-header>Hola jose</ion-list-header>\n\n      <button menuClose ion-item *ngFor="let m of menuOpc; index as i" (click)="setContent(i)"> \n\n        <ion-icon [name]="m.icon" margin-right></ion-icon> {{m.label}}\n\n      </button>\n\n      <ion-list-header>Perfil</ion-list-header>\n\n      <button ion-item (click)="logout()"> <ion-icon name="md-exit" margin-right></ion-icon>Cerrar Sesion</button>\n\n    </ion-list>\n\n\n\n  </ion-menu>\n\n  <ion-nav [root]="root" main #content></ion-nav>\n\n</ion-split-pane>'/*ion-inline-end:"F:\UNICAUCA\00_MOVILES-Dario Fernando Chamorro Vela\000_Proyecto_VacationSearch\VacationSearch\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        this.storage.set("logged", true);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"F:\UNICAUCA\00_MOVILES-Dario Fernando Chamorro Vela\000_Proyecto_VacationSearch\VacationSearch\src\pages\login\login.html"*/'<ion-content padding class="login-bg">\n\n  <div class="login-main">\n\n\n\n    <h1 class="login-title" text-right>VacationSearch</h1>\n\n    <div class="login-form">\n\n      <ion-row>\n\n        <ion-col col-12 col-md-6 offset-md-6 col-lg-4 offset-lg-8>\n\n          <ion-item color="itemLight">\n\n            <ion-label floating color="light">Email</ion-label>\n\n            <ion-input type="email" name="email"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12 col-md-6 offset-md-6 col-lg-4 offset-lg-8 margin-top>\n\n          <ion-item color="itemLight">\n\n            <ion-label floating color="light">Contraseña</ion-label>\n\n            <ion-input type="password" name="pass"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n    <ion-row>\n\n      <button ion-col col-6 col-md-3 offset-md-6 col-lg-2 offset-lg-8 ion-button clear>Registrate</button>\n\n      <button ion-col col-6 col-md-3 col-lg-2 ion-button block (click)="login()">Entrar</button>\n\n    </ion-row>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"F:\UNICAUCA\00_MOVILES-Dario Fernando Chamorro Vela\000_Proyecto_VacationSearch\VacationSearch\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaqueteDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaqueteDataProvider = (function () {
    function PaqueteDataProvider() {
        this.loadData();
    }
    PaqueteDataProvider.prototype.loadData = function () {
        this.data = [
            { nombre: 'San Andres', precio: 7000, descripcion: 'Paquete todo incluido, con alojamiento multiple, desayuno y cena.', imagen: 'http://www.hotelsanluisvillage.com/antigua/wp-content/uploads/2013/10/johnny-cay-in-san-andres-colombia.jpg' },
            { nombre: 'Cartagena', precio: 5000, descripcion: 'Paquete con alojamiento multiple, desayuno y cena.', imagen: 'http://www.tecnogiras.com/wp-content/uploads/2016/04/Cartagena.png' },
            { nombre: 'Santa Marta', precio: 5000, descripcion: 'Paquete con desayuno y cena.', imagen: 'https://ndturismo.com/wp-content/uploads/2016/11/santa-marta-p%C3%A1gina-800x800.jpg' },
            { nombre: 'Parque del Cafe', precio: 5000, descripcion: 'Paquete todo incluido, con alojamiento multiple, desayuno y cena.', imagen: 'http://www.parquedelcafearmenia.com/images/galeria/parque-del-cafe-1.jpg' },
            { nombre: 'Panaca', precio: 3000, descripcion: '', imagen: '' },
            { nombre: 'Barranquilla', precio: 12000, descripcion: '', imagen: '' },
            { nombre: 'Gorgona', precio: 5000, descripcion: '', imagen: '' },
            { nombre: 'San Cipriano', precio: 5000, descripcion: '', imagen: '' },
            { nombre: 'Buenaventura', precio: 5000, descripcion: '', imagen: '' },
            { nombre: 'Laguna de la cocha', precio: 5000, descripcion: '', imagen: '' },
            { nombre: 'Las Lajas', precio: 3000, descripcion: '', imagen: '' },
            { nombre: 'Volcan Purace', precio: 5000, descripcion: '', imagen: '' },
            { nombre: 'Rio Magdalena', precio: 3000, descripcion: '', imagen: '' },
            { nombre: 'La Guagira', precio: 5000, descripcion: '', imagen: '' },
        ];
    };
    return PaqueteDataProvider;
}());
PaqueteDataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PaqueteDataProvider);

//# sourceMappingURL=paquetes-data.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeladosDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeladosDataProvider = (function () {
    function HeladosDataProvider() {
        this.loadData();
    }
    HeladosDataProvider.prototype.loadData = function () {
        this.data = [
            { nombre: 'Banana Split', porcion: 2, precio: 7000, imagen: 'http://clcdn02.mundotkm.com/2016/02/HELADO5.jpg' },
            { nombre: 'Cono de Chispitas', porcion: 1, precio: 5000, imagen: 'http://www.daledetalles.com/wp-content/uploads/2013/04/cupcakes13.jpg' },
            { nombre: 'Helado de Vainilla', porcion: 1, precio: 5000, imagen: 'http://www.cremhelado.com.co/wp-content/uploads/2015/01/Beneficios_helados3.jpg' },
            { nombre: 'Helado de Avellanas', porcion: 1, precio: 5000, imagen: 'http://www.planetacurioso.com/wp-content/uploads/2013/08/helado_extravagante6.jpg' },
            { nombre: 'Copa de Helado', porcion: 1, precio: 3000, imagen: 'https://i0.fiuxy.com/05332f37db01c670f5dfe640c13920567a85c882?url=http%3A%2F%2Fchefalpaso.com%2Fwp-content%2Fuploads%2F2012%2F05%2FPostre-frutas-helado1.jpg' },
            { nombre: 'Siete Sabores', porcion: 4, precio: 12000, imagen: 'http://turronessirvent.com/wp-content/uploads/2016/01/helados.jpg' },
            { nombre: 'Chocolate Pasion', porcion: 1, precio: 5000, imagen: 'http://static.vix.com/es/sites/default/files/styles/large/public/imj/elgranchef/H/Helado%20de%20chocolate%20sin%20leche.jpg' },
            { nombre: 'Frutos Rojos', porcion: 1, precio: 5000, imagen: 'http://2.bp.blogspot.com/-qZ2Oi3Z3r9M/VNqo_iCRm6I/AAAAAAAAF_A/dcwSL1RgZJI/s1600/P2070250.JPG' },
            { nombre: 'Helado de Fresas', porcion: 1, precio: 5000, imagen: 'https://s-media-cache-ak0.pinimg.com/originals/eb/25/57/eb2557a80bdcf64f1f0d5cd3aa9e22da.jpg' },
            { nombre: 'Helado de Caramelo', porcion: 1, precio: 5000, imagen: 'http://www.que.es/archivos/201108/helados-dolcelatte.jpg' },
            { nombre: 'Cono de Nieve', porcion: 1, precio: 3000, imagen: 'http://cdn.kiwilimon.com/clasificacion/44/44.jpg' },
            { nombre: 'Helado de Naranja', porcion: 1, precio: 5000, imagen: 'http://recetas.cuidadoinfantil.net/files/2012/06/helado-de-naranja.jpg' },
            { nombre: 'Estrella', porcion: 2, precio: 3000, imagen: 'http://cde.3.elcomercio.pe/ima/0/0/8/0/8/808106/base_image.jpg' },
            { nombre: 'Helado de Lima', porcion: 1, precio: 5000, imagen: 'http://www.salkantay.net/wp-content/uploads/2014/04/helados-en-lima.jpg' },
        ];
    };
    return HeladosDataProvider;
}());
HeladosDataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], HeladosDataProvider);

//# sourceMappingURL=helados-data.js.map

/***/ }),

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
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
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaquetePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_paquetes_data_paquetes_data__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_paquete_add_paquete__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaquetePage = (function () {
    function PaquetePage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.paquetes = [];
        this.paquetes = service.data;
    }
    PaquetePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaquetePage');
    };
    PaquetePage.prototype.goToAdd = function () {
        this.navCtrl.parent.push(__WEBPACK_IMPORTED_MODULE_3__add_paquete_add_paquete__["a" /* AddPaquetePage */]);
    };
    return PaquetePage;
}());
PaquetePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-paquete',template:/*ion-inline-start:"F:\UNICAUCA\00_MOVILES-Dario Fernando Chamorro Vela\000_Proyecto_VacationSearch\VacationSearch\src\pages\paquete\paquete.html"*/'<ion-header>\n  \n    <ion-navbar color="primary">\n      <button ion-button menuToggle icon-only > \n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Paquetes</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  <ion-content padding>\n  \n    <ion-row>\n      <ion-col col-12 col-md-6 col-lg-4 *ngFor="let p of paquetes">\n        <ion-card >\n          <img src="{{p.imagen}}" alt="">\n          <ion-card-content>\n            <ion-card-title>{{p.nombre}}</ion-card-title>\n              <div><ion-icon name="logo-usd"></ion-icon> {{ p.precio}}</div>\n              <div><ion-icon name="albums"></ion-icon> {{ p.descripcion}}</div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  \n    <ion-fab right bottom>\n      <button (click)="goToAdd()" ion-fab  color="secondary"><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n  \n  \n  </ion-content>'/*ion-inline-end:"F:\UNICAUCA\00_MOVILES-Dario Fernando Chamorro Vela\000_Proyecto_VacationSearch\VacationSearch\src\pages\paquete\paquete.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_paquetes_data_paquetes_data__["a" /* PaqueteDataProvider */]])
], PaquetePage);

//# sourceMappingURL=paquete.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPaquetePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_paquetes_data_paquetes_data__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_paquetes_data_paquete__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddPaquetePage = (function () {
    function AddPaquetePage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.paquete = new __WEBPACK_IMPORTED_MODULE_3__providers_paquetes_data_paquete__["a" /* Paquete */]("", 0, "", "");
    }
    AddPaquetePage.prototype.save = function () {
        this.service.data.splice(0, 0, this.paquete);
        this.navCtrl.pop();
    };
    return AddPaquetePage;
}());
AddPaquetePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-paquete',template:/*ion-inline-start:"F:\UNICAUCA\00_MOVILES-Dario Fernando Chamorro Vela\000_Proyecto_VacationSearch\VacationSearch\src\pages\add-paquete\add-paquete.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Agregar paquete</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #form="ngForm">\n    <ion-row margin-bottom>\n\n      <ion-item ion-col col-12 col-md-6>\n        <ion-label floating>Nombre</ion-label>\n        <ion-input name="nombre" type="text" required [(ngModel)]="paquete.nombre"></ion-input>\n      </ion-item>\n\n      <ion-item ion-col col-12 col-md-6>\n        <ion-label floating>Precio</ion-label>\n        <ion-input name="precio" type="number" min="0" required [(ngModel)]="paquete.precio"\n        ></ion-input>\n      </ion-item>      \n\n      <ion-item ion-col col-12 col-md-6>\n        <ion-label floating>Descripcion</ion-label>\n        <ion-input name="descripcion" type="text" required [(ngModel)]="paquete.descripcion"></ion-input>\n      </ion-item>\n\n      <ion-item ion-col col-12 col-md-6>\n        <ion-label floating>URL Imagen</ion-label>\n        <ion-input name="imagen" type="text" required [(ngModel)]="paquete.imagen"></ion-input>\n      </ion-item>\n\n    </ion-row>\n\n  </form>\n  <button margin-top ion-button color="secondary" [disabled]="!form.valid" (click)="save()">Agregar</button>\n\n</ion-content>\n'/*ion-inline-end:"F:\UNICAUCA\00_MOVILES-Dario Fernando Chamorro Vela\000_Proyecto_VacationSearch\VacationSearch\src\pages\add-paquete\add-paquete.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_paquetes_data_paquetes_data__["a" /* PaqueteDataProvider */]])
], AddPaquetePage);

//# sourceMappingURL=add-paquete.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BebidasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BebidasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BebidasPage = (function () {
    function BebidasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BebidasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BebidasPage');
    };
    return BebidasPage;
}());
BebidasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bebidas',template:/*ion-inline-start:"F:\UNICAUCA\00_MOVILES-Dario Fernando Chamorro Vela\000_Proyecto_VacationSearch\VacationSearch\src\pages\bebidas\bebidas.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle icon-only> \n\n          <ion-icon name=\'menu\'></ion-icon>  \n\n    </button>\n\n    <ion-title>Bebidas</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>'/*ion-inline-end:"F:\UNICAUCA\00_MOVILES-Dario Fernando Chamorro Vela\000_Proyecto_VacationSearch\VacationSearch\src\pages\bebidas\bebidas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], BebidasPage);

//# sourceMappingURL=bebidas.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddHeladoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_helados_data_helados_data__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_helados_data_helado__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddHeladoPage = (function () {
    function AddHeladoPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.helado = new __WEBPACK_IMPORTED_MODULE_3__providers_helados_data_helado__["a" /* Helado */]("", 0, 0, "");
    }
    AddHeladoPage.prototype.save = function () {
        this.service.data.splice(0, 0, this.helado);
        this.navCtrl.pop();
    };
    return AddHeladoPage;
}());
AddHeladoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-helado',template:/*ion-inline-start:"F:\UNICAUCA\00_MOVILES-Dario Fernando Chamorro Vela\000_Proyecto_VacationSearch\VacationSearch\src\pages\add-helado\add-helado.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Agregar Helado</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form #form="ngForm">\n\n    <ion-row margin-bottom>\n\n\n\n      <ion-item ion-col col-12 col-md-6>\n\n        <ion-label floating>Nombre</ion-label>\n\n        <ion-input name="nombre" type="text" required [(ngModel)]="helado.nombre"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item ion-col col-12 col-md-6>\n\n        <ion-label floating>Procion</ion-label>\n\n        <ion-input name="porcion" type="number" min="0" required \n\n        [(ngModel)]="helado.porcion"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item ion-col col-12 col-md-6>\n\n        <ion-label floating>Precio</ion-label>\n\n        <ion-input name="precio" type="number" min="0" required\n\n          [(ngModel)]="helado.precio"\n\n        ></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item ion-col col-12 col-md-6>\n\n        <ion-label floating>Imagen</ion-label>\n\n        <ion-input name="imagen" type="text" required\n\n          [(ngModel)]="helado.imagen"\n\n        ></ion-input>\n\n      </ion-item>\n\n\n\n    </ion-row>\n\n\n\n  </form>\n\n  <button margin-top ion-button color="secondary" [disabled]="!form.valid" (click)="save()">Agregar</button>\n\n\n\n</ion-content>'/*ion-inline-end:"F:\UNICAUCA\00_MOVILES-Dario Fernando Chamorro Vela\000_Proyecto_VacationSearch\VacationSearch\src\pages\add-helado\add-helado.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_helados_data_helados_data__["a" /* HeladosDataProvider */]])
], AddHeladoPage);

//# sourceMappingURL=add-helado.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_paquete_add_paquete__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_paquetes_data_paquetes_data__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_helados_helados__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_bebidas_bebidas__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_add_helado_add_helado__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_helados_data_helados_data__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_paquete_paquete__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_paquete_paquete__["a" /* PaquetePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_add_paquete_add_paquete__["a" /* AddPaquetePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_helados_helados__["a" /* HeladosPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_bebidas_bebidas__["a" /* BebidasPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_add_helado_add_helado__["a" /* AddHeladoPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_paquete_paquete__["a" /* PaquetePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_add_paquete_add_paquete__["a" /* AddPaquetePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_helados_helados__["a" /* HeladosPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_add_helado_add_helado__["a" /* AddHeladoPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_bebidas_bebidas__["a" /* BebidasPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_10__providers_paquetes_data_paquetes_data__["a" /* PaqueteDataProvider */],
            __WEBPACK_IMPORTED_MODULE_14__providers_helados_data_helados_data__["a" /* HeladosDataProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, storage) {
        var _this = this;
        this.storage = storage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.storage.get("logged").then(function (value) { return _this.rootPage = value ? __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] : __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]; });
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"F:\UNICAUCA\00_MOVILES-Dario Fernando Chamorro Vela\000_Proyecto_VacationSearch\VacationSearch\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"F:\UNICAUCA\00_MOVILES-Dario Fernando Chamorro Vela\000_Proyecto_VacationSearch\VacationSearch\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Paquete; });
var Paquete = (function () {
    function Paquete(nombre, precio, descripcion, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
    return Paquete;
}());

//# sourceMappingURL=paquete.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeladosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_helados_data_helados_data__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_helado_add_helado__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeladosPage = (function () {
    function HeladosPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.helados = [];
        this.helados = service.data;
    }
    HeladosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HeladosPage');
    };
    HeladosPage.prototype.goToAdd = function () {
        this.navCtrl.parent.push(__WEBPACK_IMPORTED_MODULE_3__add_helado_add_helado__["a" /* AddHeladoPage */]);
    };
    return HeladosPage;
}());
HeladosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-helados',template:/*ion-inline-start:"F:\UNICAUCA\00_MOVILES-Dario Fernando Chamorro Vela\000_Proyecto_VacationSearch\VacationSearch\src\pages\helados\helados.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle icon-only > \n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Helados</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content padding>\n\n\n\n  <ion-row>\n\n    <ion-col col-12 col-md-6 col-lg-4 *ngFor="let h of helados">\n\n      <ion-card >\n\n        <img src="{{h.imagen}}" alt="">\n\n        <ion-card-content>\n\n          <ion-card-title>{{h.nombre}}</ion-card-title>\n\n            <div><ion-icon name="logo-usd"></ion-icon> {{ h.precio}}</div>\n\n            <div><ion-icon name="people"></ion-icon> {{ h.porcion}}</div>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-fab right bottom>\n\n    <button (click)="goToAdd()" ion-fab  color="secondary"><ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"F:\UNICAUCA\00_MOVILES-Dario Fernando Chamorro Vela\000_Proyecto_VacationSearch\VacationSearch\src\pages\helados\helados.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_helados_data_helados_data__["a" /* HeladosDataProvider */]])
], HeladosPage);

//# sourceMappingURL=helados.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Helado; });
var Helado = (function () {
    function Helado(nombre, porcion, precio, imagen) {
        this.nombre = nombre;
        this.porcion = porcion;
        this.precio = precio;
        this.imagen = imagen;
    }
    return Helado;
}());

//# sourceMappingURL=helado.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map