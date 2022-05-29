import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
// const routes: Routes = [
//   {path:"create", component: CreateComponent},
//   {path:"login", component: LoginComponent}
// ];
const routes: Routes = [
  {path:'', component: LoginComponent ,
    children:[
      {path:'',component:LoginComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
