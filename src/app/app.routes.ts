import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CompararComponent } from './components/comparar/comparar.component';
import { NgModule } from '@angular/core';
import { VerificarComponent } from './components/verificar/verificar.component';


export const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'comparar', component: CompararComponent}
];





