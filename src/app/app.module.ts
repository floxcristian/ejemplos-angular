import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Ejemplo1Component } from './components/ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './components/ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './components/ejemplo3/ejemplo3.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [AppComponent, Ejemplo1Component, Ejemplo2Component, Ejemplo3Component, ProductCardComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
