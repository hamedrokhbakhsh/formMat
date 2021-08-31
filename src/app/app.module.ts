import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormModule} from "./form/form.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {InboxMessageModule} from "./inbox-message/inbox-message.module";

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormModule,
    NgbModule,
    InboxMessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
