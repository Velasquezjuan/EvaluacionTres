import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ApiHtmlPageRoutingModule } from './api-html-routing.module';
//import { ApiHtmlPage } from './api-html.page'; // Importa el componente standalone

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiHtmlPageRoutingModule,
  //  ApiHtmlPage, // IMPORTA el componente standalone aquí
  ],
})
export class ApiHtmlPageModule {}
