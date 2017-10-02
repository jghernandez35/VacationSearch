import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { HeladosPage } from '../pages/helados/helados';
import { BebidasPage } from '../pages/bebidas/bebidas';
import { AddHeladoPage } from '../pages/add-helado/add-helado';
import { HeladosDataProvider } from '../providers/helados-data/helados-data';

import { PaquetePage} from '../pages/paquete/paquete';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HeladosPage,
    BebidasPage,
    AddHeladoPage,
    LoginPage,
    PaquetePage
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
    HeladosPage,
    AddHeladoPage,
    BebidasPage,
    PaquetePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HeladosDataProvider
  ]
})
export class AppModule { }
