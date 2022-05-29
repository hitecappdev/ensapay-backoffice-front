import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { AgentModule } from './agent/agent.module';
import { LoginComponent } from './auth/components/login/login.component';

const authModule = () => import('./auth/auth.module').then(x => x.AuthModule);
const agentModule = () => import('./agent/agent.module').then(x => x.AgentModule);

const routes:Routes = [
    {path:'', loadChildren : authModule},
    {path:'agent',loadChildren : agentModule, canActivate:[AuthGuard]},
    {path:'login',loadChildren : authModule}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[
    RouterModule,
  ]
})
export class AppRoutingModule {
  
 }
