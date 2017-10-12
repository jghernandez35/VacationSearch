webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__paquete_paquete__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_paquetes_data_paquete_dao__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_paquete_mongo_add_paquete_mongo__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__paquete_mongo_paquete_mongo__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Paquetes SQLite
////import { AddPaquetePage } from '../add-paquete/add-paquete';

//import { Paquete } from '../../providers/paquetes-data/paquete';
// Paquetes Mongo


////import { PaqueteMongoProvider } from '../../providers/paquetes-mongo/paquetes-mongo';
//borrar
////import { BebidasPage } from '../bebidas/bebidas';
var HomePage = (function () {
    function HomePage(navCtrl, dao, storage) {
        this.navCtrl = navCtrl;
        this.dao = dao;
        this.storage = storage;
        this.paquetes = [];
        //  root: any = PaquetePage;
        this.root = __WEBPACK_IMPORTED_MODULE_7__paquete_mongo_paquete_mongo__["a" /* PaqueteMongoPage */];
        this.menuOpc = [
            { label: 'Inicio', icon: 'home' },
            { label: 'Favoritos', icon: 'heart' },
            { label: 'Notificaciones', icon: 'notifications' },
            { label: 'Lista de deseos', icon: 'heart' },
            { label: 'Mi cuenta', icon: 'contact' },
            { label: 'Información', icon: 'information-circle' }
        ];
    }
    HomePage.prototype.setContent = function (index) {
        if (index == 0) {
            this.root = __WEBPACK_IMPORTED_MODULE_7__paquete_mongo_paquete_mongo__["a" /* PaqueteMongoPage */];
        }
        else {
            this.root = __WEBPACK_IMPORTED_MODULE_4__paquete_paquete__["a" /* PaquetePage */];
        }
    };
    HomePage.prototype.logout = function () {
        this.storage.set("logged", false);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    // loadPaquetes() {
    //   this.dao.all()
    //     .then(data => this.paquetes = data);
    // }
    HomePage.prototype.goToAdd = function () {
        //this.navCtrl.push(AddPaquetePage);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__add_paquete_mongo_add_paquete_mongo__["a" /* AddPaqueteMongoPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"F:\UNICAUCA\00_MOVILES-Dario Fernando Chamorro Vela\000_Proyecto_VacationSearch\VacationSearch\src\pages\home\home.html"*/'<ion-split-pane when="lg">\n\n  <ion-menu [content]="content">\n\n\n\n    <ion-list no-lines>\n\n      <ion-list-header>Menu</ion-list-header>\n\n      <button menuClose ion-item *ngFor="let m of menuOpc; index as i" (click)="setContent(i)"> \n\n        <ion-icon [name]="m.icon" margin-right></ion-icon> {{m.label}}\n\n      </button>\n\n      <ion-list-header>Perfil</ion-list-header>\n\n      <button ion-item (click)="logout()"> <ion-icon name="md-exit" margin-right></ion-icon>Cerrar Sesion</button>\n\n    </ion-list>\n\n\n\n  </ion-menu>\n\n  <ion-nav [root]="root" main #content></ion-nav>\n\n</ion-split-pane>'/*ion-inline-end:"F:\UNICAUCA\00_MOVILES-Dario Fernando Chamorro Vela\000_Proyecto_VacationSearch\VacationSearch\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_paquetes_data_paquete_dao__["a" /* PaqueteDaoProvider */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(51);
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

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPaqueteMongoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_paquetes_mongo_paquetes_mongo__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_paquetes_mongo_paqueteM__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddPaqueteMongoPage = (function () {
    function AddPaqueteMongoPage(navCtrl, navParams, service, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.toastCtrl = toastCtrl;
        this.paquete = new __WEBPACK_IMPORTED_MODULE_3__providers_paquetes_mongo_paqueteM__["a" /* Paquete */]();
    }
    AddPaqueteMongoPage.prototype.save = function () {
        var _this = this;
        this.service.insert(this.paquete)
            .subscribe(function (res) {
            if (res.success) {
                _this.showToast("Paquete insertado !");
                _this.navCtrl.pop();
            }
            else {
                _this.showToast("Error al insertar Paquete");
            }
        });
    };
    AddPaqueteMongoPage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    return AddPaqueteMongoPage;
}());
AddPaqueteMongoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-paquete-mongo',template:/*ion-inline-start:"F:\UNICAUCA\00_MOVILES-Dario Fernando Chamorro Vela\000_Proyecto_VacationSearch\VacationSearch\src\pages\add-paquete-mongo\add-paquete-mongo.html"*/'<ion-header>\n  \n    <ion-navbar>\n      <ion-title>Agregar paquete Mongo</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n    <form #form="ngForm">\n      <ion-row margin-bottom>\n  \n        <ion-item ion-col col-12 col-md-6>\n          <ion-label floating>Nombre</ion-label>\n          <ion-input name="nombre" type="text" required [(ngModel)]="paquete.nombre"></ion-input>\n        </ion-item>\n  \n        <ion-item ion-col col-12 col-md-6>\n          <ion-label floating>Precio</ion-label>\n          <ion-input name="precio" type="number" min="0" required [(ngModel)]="paquete.precio"\n          ></ion-input>\n        </ion-item>      \n  \n        <ion-item ion-col col-12 col-md-6>\n          <ion-label floating>Descripcion</ion-label>\n          <ion-input name="descripcion" type="text" required [(ngModel)]="paquete.descripcion"></ion-input>\n        </ion-item>\n  \n        <ion-item ion-col col-12 col-md-6>\n          <ion-label floating>URL Imagen</ion-label>\n          <ion-input name="imagen" type="text" required [(ngModel)]="paquete.imagen"></ion-input>\n        </ion-item>\n  \n      </ion-row>\n  \n    </form>\n    <button margin-top ion-button color="secondary" [disabled]="!form.valid" (click)="save()">Agregar</button>\n  \n  </ion-content>'/*ion-inline-end:"F:\UNICAUCA\00_MOVILES-Dario Fernando Chamorro Vela\000_Proyecto_VacationSearch\VacationSearch\src\pages\add-paquete-mongo\add-paquete-mongo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_paquetes_mongo_paquetes_mongo__["a" /* PaqueteMongoProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]])
], AddPaqueteMongoPage);

//# sourceMappingURL=add-paquete-mongo.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaqueteMongoProvider; });
/* unused harmony export SimpleResponse */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaqueteMongoProvider = (function () {
    function PaqueteMongoProvider(http) {
        this.http = http;
        this.url = "http://localhost:3000/api/paquetes";
    }
    PaqueteMongoProvider.prototype.all = function () {
        return this.http.get(this.url);
    };
    PaqueteMongoProvider.prototype.insert = function (paquete) {
        return this.http.post(this.url, paquete);
    };
    return PaqueteMongoProvider;
}());
PaqueteMongoProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], PaqueteMongoProvider);

var SimpleResponse = (function () {
    function SimpleResponse() {
    }
    return SimpleResponse;
}());

//# sourceMappingURL=paquetes-mongo.js.map

/***/ }),

/***/ 106:
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

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
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
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaquetePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_paquete_add_paquete__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_paquetes_data_paquete_dao__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//v1
//import { PaqueteDataProvider } from '../../providers/paquetes-data/paquetes-data';
//v2


var PaquetePage = (function () {
    function PaquetePage(navCtrl, navParams, 
        //v2
        dao) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dao = dao;
        this.paquetes = [];
        //this.paquetes = service.data;
    }
    PaquetePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaquetePage');
    };
    PaquetePage.prototype.loadPaquetes = function () {
        var _this = this;
        this.dao.all()
            .then(function (data) { return _this.paquetes = data; });
    };
    PaquetePage.prototype.goToAdd = function () {
        this.navCtrl.parent.push(__WEBPACK_IMPORTED_MODULE_2__add_paquete_add_paquete__["a" /* AddPaquetePage */]);
    };
    //Se invoca cada que la pantalla es visible
    PaquetePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.dao.ready()
            .then(function () { return _this.loadPaquetes(); });
    };
    return PaquetePage;
}());
PaquetePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-paquete',template:/*ion-inline-start:"F:\UNICAUCA\00_MOVILES-Dario Fernando Chamorro Vela\000_Proyecto_VacationSearch\VacationSearch\src\pages\paquete\paquete.html"*/'  <ion-header>\n  \n    <ion-navbar color="primary">\n      <button ion-button menuToggle icon-only > \n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Paquetes</ion-title>\n    </ion-navbar>\n  </ion-header>}\n  \n  <ion-content padding>\n  \n    <ion-row>\n      <ion-col col-12 col-md-6 col-lg-4 *ngFor="let p of paquetes">\n        <ion-card >\n          <img src="{{p.imagen}}" alt="">\n          <ion-card-content>\n            <ion-card-title>{{p.nombre}}</ion-card-title>\n              <div><ion-icon name="logo-usd"></ion-icon> {{ p.precio}}</div>\n              <div><ion-icon name="albums"></ion-icon> {{ p.descripcion}}</div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  \n    <ion-fab right bottom>\n      <button (click)="goToAdd()" ion-fab  color="secondary"><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n  \n  \n  </ion-content>'/*ion-inline-end:"F:\UNICAUCA\00_MOVILES-Dario Fernando Chamorro Vela\000_Proyecto_VacationSearch\VacationSearch\src\pages\paquete\paquete.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_paquetes_data_paquete_dao__["a" /* PaqueteDaoProvider */]])
], PaquetePage);

//# sourceMappingURL=paquete.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPaquetePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_paquetes_data_paquete_dao__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_paquetes_data_paquete__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { PaqueteDataProvider } from '../../providers/paquetes-data/paquetes-data';


var AddPaquetePage = (function () {
    function AddPaquetePage(navCtrl, navParams, dao
        /*public service:PaqueteDataProvider*/ ) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dao = dao;
        //      this.paquete = new Paquete(0,"",0,"","");
        this.paquete = new __WEBPACK_IMPORTED_MODULE_3__providers_paquetes_data_paquete__["a" /* Paquete */]();
    }
    AddPaquetePage.prototype.save = function () {
        var _this = this;
        this.dao.insert(this.paquete)
            .then(function (res) { return _this.navCtrl.pop(); });
        //    this.service.data.splice(0,0,this.paquete);
        //    this.navCtrl.pop();  
    };
    return AddPaquetePage;
}());
AddPaquetePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-paquete',template:/*ion-inline-start:"F:\UNICAUCA\00_MOVILES-Dario Fernando Chamorro Vela\000_Proyecto_VacationSearch\VacationSearch\src\pages\add-paquete\add-paquete.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Agregar paquete</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #form="ngForm">\n    <ion-row margin-bottom>\n\n      <ion-item ion-col col-12 col-md-6>\n        <ion-label floating>Nombre</ion-label>\n        <ion-input name="nombre" type="text" required [(ngModel)]="paquete.nombre"></ion-input>\n      </ion-item>\n\n      <ion-item ion-col col-12 col-md-6>\n        <ion-label floating>Precio</ion-label>\n        <ion-input name="precio" type="number" min="0" required [(ngModel)]="paquete.precio"\n        ></ion-input>\n      </ion-item>      \n\n      <ion-item ion-col col-12 col-md-6>\n        <ion-label floating>Descripcion</ion-label>\n        <ion-input name="descripcion" type="text" required [(ngModel)]="paquete.descripcion"></ion-input>\n      </ion-item>\n\n      <ion-item ion-col col-12 col-md-6>\n        <ion-label floating>URL Imagen</ion-label>\n        <ion-input name="imagen" type="text" required [(ngModel)]="paquete.imagen"></ion-input>\n      </ion-item>\n\n    </ion-row>\n\n  </form>\n  <button margin-top ion-button color="secondary" [disabled]="!form.valid" (click)="save()">Agregar</button>\n\n</ion-content>\n'/*ion-inline-end:"F:\UNICAUCA\00_MOVILES-Dario Fernando Chamorro Vela\000_Proyecto_VacationSearch\VacationSearch\src\pages\add-paquete\add-paquete.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_paquetes_data_paquete_dao__["a" /* PaqueteDaoProvider */]
        /*public service:PaqueteDataProvider*/ ])
], AddPaquetePage);

//# sourceMappingURL=add-paquete.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseConnectionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatabaseConnectionProvider = (function () {
    function DatabaseConnectionProvider() {
    }
    DatabaseConnectionProvider.prototype.getConnection = function () {
        var _this = this;
        if (this.db) {
            return Promise.resolve(this.db);
        }
        else {
            var sqlite = new __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]();
            return sqlite.create({
                name: 'paquetes.db',
                location: 'default'
            }).then(function (db) {
                _this.db = db;
                return _this.init().then(function (res) {
                    return Promise.resolve(db);
                });
            });
        }
    };
    DatabaseConnectionProvider.prototype.init = function () {
        var sql = "CREATE TABLE IF NOT EXISTS paquete ("
            + "id INTEGER PRIMARY KEY AUTOINCREMENT"
            + ", nombre VARCHAR"
            + ", precio FLOAT"
            + ", descripcion VARCHAR"
            + ", imagen VARCHAR"
            + ")";
        return this.db.executeSql(sql, []);
    };
    return DatabaseConnectionProvider;
}());
DatabaseConnectionProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DatabaseConnectionProvider);

//# sourceMappingURL=database-connection.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaqueteMongoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_paquete_mongo_add_paquete_mongo__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_paquetes_mongo_paquetes_mongo__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// imports para mongo


var PaqueteMongoPage = (function () {
    function PaqueteMongoPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.paquetes = [];
    }
    PaqueteMongoPage.prototype.ionViewDidLoad = function () {
        this.loadPaquetes();
    };
    PaqueteMongoPage.prototype.goToAdd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_paquete_mongo_add_paquete_mongo__["a" /* AddPaqueteMongoPage */]);
    };
    PaqueteMongoPage.prototype.loadPaquetes = function (refresher) {
        var _this = this;
        if (refresher === void 0) { refresher = null; }
        this.service.all().subscribe(function (res) {
            _this.paquetes = res;
            if (refresher != null)
                refresher.complete();
        });
    };
    PaqueteMongoPage.prototype.doRefresh = function (refresher) {
        this.loadPaquetes(refresher);
    };
    return PaqueteMongoPage;
}());
PaqueteMongoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-paquete-mongo',template:/*ion-inline-start:"F:\UNICAUCA\00_MOVILES-Dario Fernando Chamorro Vela\000_Proyecto_VacationSearch\VacationSearch\src\pages\paquete-mongo\paquete-mongo.html"*/'<ion-header>\n  \n    <ion-navbar color="primary">\n      <button ion-button menuToggle icon-only > \n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title color="primary">Paquetes Mongo</ion-title>\n    </ion-navbar>\n  </ion-header>}\n  \n  <ion-content padding>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n      <ion-refresher-content\n        pullingText = "Deliza para recargar"\n        refreshingText="Recargando ..."\n      ></ion-refresher-content>\n    </ion-refresher>\n    <ion-row>\n      <ion-col col-12 col-md-6 col-lg-4 *ngFor="let p of paquetes">\n        <ion-card >\n          <img src="{{p.imagen}}" alt="">\n          <ion-card-content>\n            <ion-card-title>{{p.nombre}}</ion-card-title>\n              <div><ion-icon name="logo-usd"></ion-icon> {{ p.precio}}</div>\n              <div><ion-icon name="albums"></ion-icon> {{ p.descripcion}}</div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  \n    <ion-fab right bottom>\n      <button (click)="goToAdd()" ion-fab  color="secondary"><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n  \n  \n  </ion-content>'/*ion-inline-end:"F:\UNICAUCA\00_MOVILES-Dario Fernando Chamorro Vela\000_Proyecto_VacationSearch\VacationSearch\src\pages\paquete-mongo\paquete-mongo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_paquetes_mongo_paquetes_mongo__["a" /* PaqueteMongoProvider */]])
], PaqueteMongoPage);

//# sourceMappingURL=paquete-mongo.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddHeladoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_helados_data_helados_data__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_helados_data_helado__ = __webpack_require__(286);
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

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_add_paquete_add_paquete__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_paquetes_data_paquetes_data__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_paquete_paquete__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_database_connection_database_connection__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_paquetes_data_paquete_dao__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_add_paquete_mongo_add_paquete_mongo__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_paquetes_mongo_paquetes_mongo__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_paquete_mongo_paquete_mongo__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_helados_helados__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_bebidas_bebidas__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_add_helado_add_helado__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_helados_data_helados_data__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// imports para trabajar con SQLite


// imports para trabajar con MongoDB







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            // SQLite
            __WEBPACK_IMPORTED_MODULE_12__pages_paquete_paquete__["a" /* PaquetePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_add_paquete_add_paquete__["a" /* AddPaquetePage */],
            // Mongo
            __WEBPACK_IMPORTED_MODULE_17__pages_paquete_mongo_paquete_mongo__["a" /* PaqueteMongoPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_add_paquete_mongo_add_paquete_mongo__["a" /* AddPaqueteMongoPage */],
            // pendiente de eliminar
            __WEBPACK_IMPORTED_MODULE_18__pages_helados_helados__["a" /* HeladosPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_bebidas_bebidas__["a" /* BebidasPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_add_helado_add_helado__["a" /* AddHeladoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            // import de la libreria de http
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            // SQLite
            __WEBPACK_IMPORTED_MODULE_12__pages_paquete_paquete__["a" /* PaquetePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_add_paquete_add_paquete__["a" /* AddPaquetePage */],
            // Mongo
            __WEBPACK_IMPORTED_MODULE_17__pages_paquete_mongo_paquete_mongo__["a" /* PaqueteMongoPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_add_paquete_mongo_add_paquete_mongo__["a" /* AddPaqueteMongoPage */],
            // pemdiente de eliminar
            __WEBPACK_IMPORTED_MODULE_18__pages_helados_helados__["a" /* HeladosPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_add_helado_add_helado__["a" /* AddHeladoPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_bebidas_bebidas__["a" /* BebidasPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            // paquetes quemados
            __WEBPACK_IMPORTED_MODULE_11__providers_paquetes_data_paquetes_data__["a" /* PaqueteDataProvider */],
            // Providers de SQLite
            __WEBPACK_IMPORTED_MODULE_13__providers_database_connection_database_connection__["a" /* DatabaseConnectionProvider */],
            __WEBPACK_IMPORTED_MODULE_14__providers_paquetes_data_paquete_dao__["a" /* PaqueteDaoProvider */],
            // Providers de Mongo
            __WEBPACK_IMPORTED_MODULE_16__providers_paquetes_mongo_paquetes_mongo__["a" /* PaqueteMongoProvider */],
            // pendiente de eliminar
            __WEBPACK_IMPORTED_MODULE_21__providers_helados_data_helados_data__["a" /* HeladosDataProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(103);
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
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
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

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Paquete; });
var Paquete = (function () {
    function Paquete() {
    }
    return Paquete;
}());

//export class Paquete {
//    constructor(
//        public nombre: string,
//        public precio: number,
//        public descripcion: string,
//        public imagen: string) { }
//} 
//# sourceMappingURL=paquete.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Paquete; });
var Paquete = (function () {
    function Paquete() {
    }
    return Paquete;
}());

//# sourceMappingURL=paqueteM.js.map

/***/ }),

/***/ 284:
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
            { id: 1, nombre: 'San Andres', precio: 7000, descripcion: 'Paquete todo incluido, con alojamiento multiple, desayuno y cena.', imagen: 'http://www.hotelsanluisvillage.com/antigua/wp-content/uploads/2013/10/johnny-cay-in-san-andres-colombia.jpg' },
            { id: 2, nombre: 'Cartagena', precio: 5000, descripcion: 'Paquete con alojamiento multiple, desayuno y cena.', imagen: 'http://www.tecnogiras.com/wp-content/uploads/2016/04/Cartagena.png' },
            { id: 3, nombre: 'Santa Marta', precio: 5000, descripcion: 'Paquete con desayuno y cena.', imagen: 'https://ndturismo.com/wp-content/uploads/2016/11/santa-marta-p%C3%A1gina-800x800.jpg' },
            { id: 4, nombre: 'Parque del Cafe', precio: 5000, descripcion: 'Paquete todo incluido, con alojamiento multiple, desayuno y cena.', imagen: 'http://www.parquedelcafearmenia.com/images/galeria/parque-del-cafe-1.jpg' },
            { id: 5, nombre: 'Panaca', precio: 3000, descripcion: '', imagen: '' },
            { id: 6, nombre: 'Barranquilla', precio: 12000, descripcion: '', imagen: '' },
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

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeladosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_helados_data_helados_data__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_helado_add_helado__ = __webpack_require__(205);
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

/***/ 286:
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

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BebidasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaqueteDaoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_connection_database_connection__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaqueteDaoProvider = (function () {
    function PaqueteDaoProvider(con) {
        this.con = con;
    }
    PaqueteDaoProvider.prototype.ready = function () {
        var _this = this;
        if (this.db) {
            return Promise.resolve(true);
        }
        else {
            return this.con.getConnection().then(function (db) {
                _this.db = db;
                return Promise.resolve(true);
            });
        }
    };
    PaqueteDaoProvider.prototype.insert = function (paquete) {
        var sql = "INSERT INTO paquete (nombre, precio, descripcion, imagen) VALUES(?,?,?,?)";
        return this.db.executeSql(sql, [paquete.nombre, paquete.precio, paquete.descripcion, paquete.imagen]);
    };
    PaqueteDaoProvider.prototype.update = function (paquete) {
        var sql = "UPDATE paquete set nombre = ?, precio = ?, descripcion = ?, imagen = ? WHERE id = ?";
        return this.db.executeSql(sql, [paquete.nombre, paquete.precio, paquete.descripcion, paquete.imagen, paquete.id]);
    };
    PaqueteDaoProvider.prototype.delete = function (id) {
        var sql = "DELETE paquete WHERE id = ?";
        return this.db.executeSql(sql, [id]);
    };
    PaqueteDaoProvider.prototype.paqueteById = function (id) {
        var sql = "SELECT * FROM paquete WHERE id = ?";
        return this.db.executeSql(sql, [id]).then(function (results) {
            var paquete = null;
            if (results.rows.length > 0) {
                paquete = results.rows.item(0);
            }
            return Promise.resolve(paquete);
        });
    };
    PaqueteDaoProvider.prototype.all = function () {
        var sql = "SELECT *  FROM paquete";
        return this.db.executeSql(sql, []).then(function (results) {
            var data = [];
            for (var i = 0; i < results.rows.length; i++) {
                var paquete = results.rows.item(i);
                data.push(paquete);
            }
            return Promise.resolve(data);
        });
    };
    return PaqueteDaoProvider;
}());
PaqueteDaoProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__database_connection_database_connection__["a" /* DatabaseConnectionProvider */]])
], PaqueteDaoProvider);

//# sourceMappingURL=paquete-dao.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map