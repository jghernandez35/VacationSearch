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

import { HeladosPage } from '../pages/helados/helados';
import { BebidasPage } from '../pages/bebidas/bebidas';
import { AddHeladoPage } from '../pages/add-helado/add-helado';
import { HeladosDataProvider } from '../providers/helados-data/helados-data';

import { PaquetePage } from '../pages/paquete/paquete';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PaquetePage,
    AddPaquetePage,

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

    HeladosDataProvider
  ]
})
export class AppModule { }
