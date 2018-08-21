import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { NovoCompComponent } from './novo-comp/novo-comp.component';
import { TestCompComponent } from './test-comp/test-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    NovoCompComponent,
    TestCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
