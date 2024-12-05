import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { QRCodeComponent } from 'angularx-qrcode'; // Importa el componente directamente

@Component({
  selector: 'app-genera-qr',
  templateUrl: './genera-qr.page.html',
  styleUrls: ['./genera-qr.page.scss'],
  standalone: true, // Indica que este componente es standalone
  imports: [IonicModule, CommonModule, FormsModule, QRCodeComponent], // QRCodeComponent se importa aquí
})
export class GeneraQrPage {
  qrData: string = 'Texto de base';
  createdCode: string = '';

  generateQRCode() {
    this.createdCode = this.qrData;
  }
}
