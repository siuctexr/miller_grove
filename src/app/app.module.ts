import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { NavBarTopComponent } from './nav-bar-top/nav-bar-top.component';
import { HomeHeaderComponent } from './home-header/home-header.component';

import { MaterialModule } from './material/material.module'

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    NavBarTopComponent,
    HomeHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
