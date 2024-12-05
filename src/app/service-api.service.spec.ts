import { TestBed } from '@angular/core/testing';
import { ServiceApiService } from './service-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa el módulo de pruebas de HttpClient

describe('ServiceApiService', () => {
  let service: ServiceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Asegúrate de incluir este módulo
    });
    service = TestBed.inject(ServiceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
