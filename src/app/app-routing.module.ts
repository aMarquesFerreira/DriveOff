import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { HomeComponent } from './home/home.component';
import { CarPageComponent } from './car-page/car-page.component';
import { HomeLandingComponent } from './home-landing/home-landing.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { HomeLanding2Component } from './home-landing2/home-landing2.component';
const routes: Routes = [
  {path:'', component:HomeLanding2Component},
  {path:'home', component:HomeComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'tag/:tag', component:HomeComponent},
  {path:'car/:id', component:CarPageComponent},
  {path:'cart-page', component: CartPageComponent},
  {path:'sobre-nos', component: SobreNosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }