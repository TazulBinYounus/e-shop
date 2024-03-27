import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home.component';
// import { LoginComponent } from './login.component';
// import { AuthGuard } from './auth.guard';

import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductSingleComponent } from './pages/product-single/product-single.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard]  },
  { path: 'products/product-1', component: ProductSingleComponent },
  // Define your routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
