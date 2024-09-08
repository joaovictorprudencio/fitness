import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CompararComponent } from './components/comparar/comparar.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { VerificarComponent } from './components/verificar/verificar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    CompararComponent,
    HomeComponent,
    RouterModule,
    VerificarComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'exercicio';
}
