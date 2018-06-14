import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TourListPage } from "../pages/tour-list/tour-list";
import { TourPage } from "../pages/tour/tour";
import { OrderPage } from "../pages/order/order";
import { OrderListPage } from "../pages/order-list/order-list";
import { ProductPage } from "../pages/product/product";
import { ProductListPage } from "../pages/product-list/product-list";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { ApiProvider } from '../providers/api/api';
import {NavigatePage} from "../pages/navigate/navigate";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TourPage,
    TourListPage,
    OrderPage,
    OrderListPage,
    ProductPage,
    ProductListPage,
    TourPage,
    NavigatePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TourListPage,
    TourPage,
    OrderPage,
    OrderListPage,
    ProductPage,
    ProductListPage,
    TourPage,
    NavigatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}
