import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { NovoCompComponent } from './novo-comp/novo-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    NovoCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
