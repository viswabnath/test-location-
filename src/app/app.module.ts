import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
 
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import{ImagePage}from '../pages/image/image';
 
// app.module.ts File

import {Camera} from '@ionic-native/camera';
 
import { Geolocation } from '@ionic-native/geolocation'; // Newly Added
 
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen'; 
 
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ImagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ImagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
     Camera,
    Geolocation, // Newly Added
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}