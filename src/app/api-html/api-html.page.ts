import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ServiceApiService } from '../service-api.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-api-html',
  templateUrl: 'api-html.page.html',
  styleUrls: ['api-html.page.scss'],
  standalone: true,
  imports: [
    IonicModule, 
    CommonModule,
    HttpClientModule  // Agregar HttpClientModule a los imports
  ],
})
export class ApiHtmlPage implements OnInit {
  cantidad_personajes: number = 0;
  personajes: any[] = [];

  constructor(private apiService: ServiceApiService) {}

  ngOnInit() {
    // Eliminar async/await y usar subscribe
    this.apiService.get().subscribe({
      next: (data: any) => {
        console.log(data.info);
        console.log(data.results);

        // Almacenar los datos
        this.cantidad_personajes = data.info.count;
        this.personajes = data.results;
      },
      error: (error) => {
        console.error('Error al obtener personajes', error);
        this.cantidad_personajes = 0;
        this.personajes = [];
      }
    });
  }
}