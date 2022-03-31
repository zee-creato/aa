

import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './Components/header/header.component';
import { MainComponent } from './Components/main/main.component';
import { FloorComponent } from './Components/floor/floor.component';
import { RoomComponent } from './Components/room/room.component';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing-module';
import { MainPageComponent } from './Components/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FloorComponent,
    RoomComponent,
    MainPageComponent,
  
   
           
  


  
  ],
  imports: [
    BrowserModule,
    FormsModule,
   [SwiperModule],
   AppRoutingModule,
  ],
  providers:[],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
