import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiHtmlPage } from './api-html.page'; // Componente standalone

const routes: Routes = [
  {
    path: '',
    component: ApiHtmlPage, // Componente asociado a esta ruta
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule], // Asegúrate de exportar RouterModule correctamente
})
export class ApiHtmlPageRoutingModule {} // Exporta ApiHtmlPageRoutingModule
