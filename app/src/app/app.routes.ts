import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {TwofactorComponent} from './components/twofactor/twofactor.component';

export const routes: Routes = [
    { path: 'auth/login', component: LoginComponent },
    { path: 'auth/verify', component: TwofactorComponent },
    { path: '', redirectTo: '/auth/login', pathMatch: 'full' }, // Redirect to login by default
    { path: '**', redirectTo: '/auth/login' } // Redirect unknown routes to login
];

