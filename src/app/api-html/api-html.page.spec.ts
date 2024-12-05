import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiHtmlPage } from './api-html.page';
import { ServiceApiService } from '../service-api.service';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('ApiHtmlPage', () => {
  let component: ApiHtmlPage;
  let fixture: ComponentFixture<ApiHtmlPage>;
  let apiService: ServiceApiService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule, // Proveedor para HttpClient
        ApiHtmlPage // Importa el componente standalone
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ApiHtmlPage);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ServiceApiService); // Inyecta el servicio
    httpMock = TestBed.inject(HttpTestingController); // Inyecta el mock para HTTP
  });

  afterEach(() => {
    httpMock.verify(); // Verifica que no queden solicitudes pendientes
  });

  it('P5 - Verificar la creación del componente', () => {
   
  });

  it('P6 - Debería cargar datos al iniciar', async () => {

  });


});
