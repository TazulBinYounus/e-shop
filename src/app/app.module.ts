import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { HeaderComponent } from './components/header/header.component';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartDrawerComponent } from './components/cart-drawer/cart-drawer.component';
import { CustomerLoginFormComponent } from './components/customer-login-form/customer-login-form.component';
import { RelatedProductComponent } from './components/related-product/related-product.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductSingleComponent } from './pages/product-single/product-single.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeSliderComponent,
    FooterComponent,
    CartDrawerComponent,
    CustomerLoginFormComponent,
    RelatedProductComponent,
    HomeComponent,
    ProductsComponent,
    ProductSingleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
