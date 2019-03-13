import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PocPoupancaComponent } from 'projects/poc-poupanca/src/public_api';

@NgModule({
  declarations: [
    AppComponent,
    PocPoupancaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([{ path: '', component: PocPoupancaComponent }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
