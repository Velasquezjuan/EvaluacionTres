import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// ----  configurar el ambiente de prueba
describe('LoginPage', () => {
  beforeEach(async()    => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        LoginPage
      ],
    }).compileComponents // fin testbed

  }) // fin before

//*****    Testing 1 : Carge page Login */

  it('P1: Existencia de la page Login', () => {
    const fixture =TestBed.createComponent(LoginPage);
    const app=fixture.componentInstance;
    
    expect(app).toBeTruthy();
  }) // fin it 1


//******   Testing 2:  Al ingresar SOLO usuario el formulario debe ser invalido */


  it('P2: Formulario Invalido' , () => {
    const fixture =TestBed.createComponent(LoginPage);
    const app=fixture.componentInstance;
    
    const usernameControl= app.loginForm.get('username');
    // asigno un valor al campo

    usernameControl?.setValue('123456789')  

    // verificamos que el formulrio sea invalido
    expect(app.loginForm.invalid).toBeTrue();
  }) // fin it 2

// ****   Testing 3 Usuario y clave son ingresados

it('P3: Formulario Invalido' , () => {
  const fixture =TestBed.createComponent(LoginPage);
  const app=fixture.componentInstance;
  
  const usernameControl= app.loginForm.get('username');
  usernameControl?.setValue('12345678')  

  const claveControl=app.loginForm.get('password');
  claveControl?.setValue('1234')  

  // verificamos que el formulrio sea invalido
  expect(app.loginForm.invalid).toBeFalse();
}) // fin it 3

// *** Testing 4  Activr un boton

it('P4: Testing del boton' , () => {
  const fixture =TestBed.createComponent(LoginPage);
  const app=fixture.componentInstance;
  
  const usernameControl= app.loginForm.get('username');
  usernameControl?.setValue('12345678')  

  const claveControl=app.loginForm.get('password');
  claveControl?.setValue('1234')  


  // Ejecutar la detección de cambios para actualizar el componente
//  fixture.detectChanges();
 
    app.onLogin()

  // verificamos que el formulario sea invalido
    expect(app.is_logued).toBeTrue();




}) // fin it 4


}); // fin area de prueba
