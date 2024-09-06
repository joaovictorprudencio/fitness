import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
   {path: '' , component: HomeComponent},
   {path: '', component: HeaderComponent}
];
