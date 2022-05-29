import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { CreateComponent } from '../agent/create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    CreateComponent,
    LoginComponent
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
    CreateComponent,
    LoginComponent
  ]
})
export class AuthModule { }
