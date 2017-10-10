import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { AddPaquetePage } from '../pages/add-paquete/add-paquete';
import { PaqueteDataProvider } from '../providers/paquetes-data/paquetes-data';
import { PaquetePage } from '../pages/paquete/paquete';
//adiciones para trabajar con SQLite
import { DatabaseConnectionProvider } from '../providers/database-connection/database-connection';
import { PaqueteDaoProvider } from '../providers/paquetes-data/paquete-dao';

import { HeladosPage } from '../pages/helados/helados';
import { BebidasPage } from '../pages/bebidas/bebidas';
import { AddHeladoPage } from '../pages/add-helado/add-helado';
import { HeladosDataProvider } from '../providers/helados-data/helados-data';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PaquetePage,
    AddPaquetePage,
//pendiente de eliminar
    HeladosPage,
    BebidasPage,
    AddHeladoPage,
    LoginPage
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],

  bootstrap: [
    IonicApp
  ],

  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    PaquetePage,
    AddPaquetePage,

    HeladosPage,
    AddHeladoPage,
    BebidasPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    PaqueteDataProvider,
    //agregando los providers de SQLite
    DatabaseConnectionProvider,
    PaqueteDaoProvider,

    HeladosDataProvider
  ]
})
export class AppModule { }
