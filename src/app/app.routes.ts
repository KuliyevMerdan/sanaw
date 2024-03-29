import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { SummaryComponent } from './pages/summary/summary.component';



export const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full'},
    { path: 'main', component: MainComponent},
    { path: 'login', component: LoginComponent },
    { path: 'summary', component: SummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutesModule { }
