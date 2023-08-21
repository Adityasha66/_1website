import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Part1Component } from './modules/part1/part1.component';
import { Part2Component } from './modules/part2/part2.component';
import { Part3Component } from './modules/part3/part3.component';
import { Part4Component } from './modules/part4/part4.component';
import { Part5Component } from './modules/part5/part5.component';

// import 'ngx-owl-carousel-o/lib/styles/scss/owl.carousel';
// import 'ngx-owl-carousel-o/lib/styles/scss/owl.theme.default';


@NgModule({
  declarations: [
    AppComponent,
    Part1Component,
    Part2Component,
    Part3Component,
    Part4Component,
    Part5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
