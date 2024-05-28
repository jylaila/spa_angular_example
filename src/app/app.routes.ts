import { Routes } from '@angular/router';
import { PacientesListComponent } from './pacientes-list/pacientes-list.component';
import { MedicosListComponent } from './medicos-list/medicos-list.component';

export const routes: Routes = [
    {path: 'pacientes-list', component: PacientesListComponent},
    {path: 'medicos-list', component: MedicosListComponent},
];
