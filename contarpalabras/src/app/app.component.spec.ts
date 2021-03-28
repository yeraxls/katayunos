import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'contarpalabras'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('contarpalabras');
  });
  
  it('separar texto', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    app._texto = "hola hola hola";
    fixture.detectChanges();
    var respuesta = app.palabrasSeparadas();
    expect(respuesta.length).toBe(3);
  });

  it('normalizadas texto', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    app._texto = "hola! hola, hola.";
    fixture.detectChanges();
    var respuesta = app.palabrasSeparadas();
    expect(!respuesta.includes("hola!")).toBe(true);
  });

  it('contar texto', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    let ejemplo = ["hola", "hola", "asd"];
    app.iniciarCuenta(ejemplo);
    fixture.detectChanges();
    var respuesta = app.contador;
    expect(respuesta.length).toBe(2);
  });
});
