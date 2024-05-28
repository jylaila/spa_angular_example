import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

import {MedicosListComponent} from './medicos-list/medicos-list.component'
import {PacientesListComponent} from './pacientes-list/pacientes-list.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink,RouterLinkActive, RouterOutlet, MedicosListComponent,PacientesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'spa_angular_example';
}
