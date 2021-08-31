import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxMessageRoutingModule } from './inbox-message-routing.module';
import {InboxMessageComponent} from "./inbox-message.component";
import {MatTableModule} from "@angular/material/table";
import { JalaliPipe } from './jalali.pipe';


@NgModule({
  declarations: [
    InboxMessageComponent,
    JalaliPipe
  ],
  imports: [
    CommonModule,
    InboxMessageRoutingModule,
    MatTableModule
  ],
  exports: [
    InboxMessageComponent
  ]
})
export class InboxMessageModule { }
