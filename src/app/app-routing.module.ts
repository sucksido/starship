import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarshipListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/product-list', pathMatch: 'full' },
  { path: 'product-list', component: StarshipListComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'cart-details', component: CartDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
