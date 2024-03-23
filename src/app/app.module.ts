import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeSliderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
