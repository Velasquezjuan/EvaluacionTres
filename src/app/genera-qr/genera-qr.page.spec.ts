import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GeneraQrPage } from './genera-qr.page';

describe('GeneraQrPage', () => {
  let component: GeneraQrPage;
  let fixture: ComponentFixture<GeneraQrPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // En lugar de "declarations", se debe importar el componente standalone
      imports: [IonicModule.forRoot(), FormsModule, GeneraQrPage],
    }).compileComponents();

    fixture = TestBed.createComponent(GeneraQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('P7- Creación exitosa del componente', () => {
    expect(component).toBeTruthy();
  });

  it('P8- Valor inicial de qrData del "Texto de base"', () => {
    expect(component.qrData).toBe('Texto de base');
  });

  it('P9- Generación del código QR al pulsar un botón', () => {
     component.qrData = 'Prueba QR';
     component.generateQRCode();
     expect(component.createdCode).toBe('Prueba QR');
    });

  it('P10- Verificar que el código QR no se muestra inicialmente', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('qrcode')).toBeNull();
  
  });

  it('P11- Actualización de createdCode al llamar a generateQRCode()', () => {
    component.qrData = 'Nuevo texto QR';
    component.generateQRCode();
    expect(component.createdCode).toBe('Nuevo texto QR');
    
  });

  it('P8 - Validar el valor inicial de qrData', () => {
    
    expect(component.qrData).toBe('Texto de base');
  });

  it('P9 - Validar que el valor inicial de qrData sea una cadena vacía o un valor predeterminado', () => {
      component.qrData = 'Prueba QR'; 
        component.generateQRCode(); 
    expect(component.createdCode).toBe('Prueba QR');
  });

  it('P10 - Validar que "createdCode" se actualice al invocar el método generateQRCode()', () => {
    const qrDataPrueba = 'Texto para generar QR';
    component.qrData = qrDataPrueba;
    component.generateQRCode();

    expect(component.createdCode).toBe(qrDataPrueba);
  });
  
  
  

});

