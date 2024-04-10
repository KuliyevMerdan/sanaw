import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { AddUserComponent } from './pages/add-user/add-user.component';



export const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full'},
    { path: 'main', component: MainComponent},
    { path: 'login', component: LoginComponent },
    { path: 'summary', component: SummaryComponent },
    { path: 'add', component: AddUserComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule]
})

export class AppRoutesModule { }
