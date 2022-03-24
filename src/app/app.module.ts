import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageoneComponent } from './pages/pageone/pageone.component';
import { BodyComponent } from './components/body/body.component';
import { PagetwoComponent } from './pages/pagetwo/pagetwo.component';
import { Body2Component } from './components/body2/body2.component';
import { Body3Component } from './components/body3/body3.component';
import { PagethreeComponent } from './pages/pagethree/pagethree.component';
import { PagefourComponent } from './pages/pagefour/pagefour.component';
import { Body4Component } from './components/body4/body4.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageoneComponent,
    BodyComponent,
    PagetwoComponent,
    Body2Component,
    Body3Component,
    PagethreeComponent,
    PagefourComponent,
    Body4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
