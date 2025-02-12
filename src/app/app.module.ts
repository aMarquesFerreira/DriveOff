import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { SearchComponent } from './search/search.component';
import {FormsModule} from '@angular/forms';
import { TagsComponent } from './tags/tags.component';
import { CarPageComponent } from './car-page/car-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeLandingComponent } from './home-landing/home-landing.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { HomeLanding2Component } from './home-landing2/home-landing2.component';
import { Header2Component } from './header2/header2.component';
import { TemplateComponent } from './template/template.component';
import { ThreeSceneComponent } from './three-scene/three-scene.component';
import { TestarAngulatTHREEComponent } from './testar-angulat-three/testar-angulat-three.component';
import * as THREE from 'three';
import { extend } from 'angular-three';
import { NewHomeComponent } from './new-home/new-home.component';
import { NewThreeComponent } from './new-three/new-three.component';
import { NewThree2Component } from './new-three2/new-three2.component';

extend(THREE);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    CarPageComponent,
    CartPageComponent,
    NotFoundComponent,
    HomeLandingComponent,
    SobreNosComponent,
    HomeLanding2Component,
    Header2Component,
    TemplateComponent,
    ThreeSceneComponent,
    TestarAngulatTHREEComponent,
    NewHomeComponent,
    NewThreeComponent,
    NewThree2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
