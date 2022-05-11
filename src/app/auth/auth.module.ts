import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { CreateComponent } from './components/create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
     FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DatePipe  
  ],
  exports: [
    CreateComponent
  ]
})
export class AuthModule { }
