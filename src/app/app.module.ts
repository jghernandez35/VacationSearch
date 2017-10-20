import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { AddPaquetePage } from '../pages/add-paquete/add-paquete';
import { PaqueteDataProvider } from '../providers/paquetes-data/paquetes-data';
import { PaquetePage } from '../pages/paquete/paquete';
// imports para trabajar con SQLite
import { DatabaseConnectionProvider } from '../providers/database-connection/database-connection';
import { PaqueteDaoProvider } from '../providers/paquetes-data/paquete-dao';
// imports para trabajar con MongoDB
import { AddPaqueteMongoPage } from '../pages/add-paquete-mongo/add-paquete-mongo';
import { PaqueteMongoProvider } from '../providers/paquetes-mongo/paquetes-mongo';
import { PaqueteMongoPage } from '../pages/paquete-mongo/paquete-mongo';

import { PaqueteviewPage } from '../pages/paqueteview/paqueteview';
import { PaqueteviewmPage } from '../pages/paqueteviewm/paqueteviewm';

import { HeladosPage } from '../pages/helados/helados';
import { BebidasPage } from '../pages/bebidas/bebidas';
import { AddHeladoPage } from '../pages/add-helado/add-helado';
import { HeladosDataProvider } from '../providers/helados-data/helados-data';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    // SQLite
    PaquetePage,
    AddPaquetePage,
    // Mongo
    PaqueteMongoPage,
    AddPaqueteMongoPage,

    PaqueteviewPage,
    PaqueteviewmPage,

// pendiente de eliminar
    HeladosPage,
    BebidasPage,
    AddHeladoPage,
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    // import de la libreria de http
    HttpClientModule
  ],

  bootstrap: [
    IonicApp
  ],

  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    // SQLite
    PaquetePage,
    AddPaquetePage,
    // Mongo
    PaqueteMongoPage,
    AddPaqueteMongoPage,

    PaqueteviewPage,
    PaqueteviewmPage,

// pemdiente de eliminar
    HeladosPage,
    AddHeladoPage,
    BebidasPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    // paquetes quemados
    PaqueteDataProvider,
    // Providers de SQLite
    DatabaseConnectionProvider,
    PaqueteDaoProvider,
    // Providers de Mongo
    PaqueteMongoProvider,

// pendiente de eliminar
    HeladosDataProvider
  ]
})
export class AppModule { }
