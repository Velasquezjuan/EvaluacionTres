import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GeneraQrPage } from './genera-qr.page'; // Importar el componente standalone

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneraQrPage, // Importar el componente standalone aquí
  ],
})
export class GeneraQrPageModule {}

