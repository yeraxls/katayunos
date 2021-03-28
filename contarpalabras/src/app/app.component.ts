import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contarpalabras';

  _texto: string
  get texto() {
    return this._texto;
  }
  set texto(v) {
    this._texto = v;
  }

  contarPalabras() {
    this.limpiarDatos();
    var palabrasSeparadas = this.palabrasSeparadas();
    this.iniciarCuenta(palabrasSeparadas);
  }
  limpiarDatos() {
    this.contador = [];
    this.listaPalabras = [];
  }

  palabrasSeparadas() {
    let separadas = this.texto.split(" ");
    return this.normalizarPalabras(separadas)
  }

  almacenaTexto(text) {
    this.texto = text.target.value;
  }

  normalizarPalabras(palabrasSeparadas: string[]) {
    let normalizadas = [];
    palabrasSeparadas.forEach(m =>
      normalizadas.push(m.toLocaleLowerCase().replace(",", "")
        .replace(".", "")
        .replace('"', "")
        .replace("!", "")));
    return normalizadas;
  }

  contador: any[] = []
  listaPalabras: string[] = [];
  iniciarCuenta(palabrasSeparadas: string[], indice: number = 0) {
    if (this.listaPalabras.find(p => p == palabrasSeparadas[indice]))
      this.iniciarCuenta(palabrasSeparadas, ++indice);
    else if (indice <= palabrasSeparadas.length - 1) {
      this.addPalabra(palabrasSeparadas, indice);
    }
  }
  addPalabra(palabrasSeparadas: string[], indice: number = 0) {
    let a = palabrasSeparadas.filter(p => palabrasSeparadas[indice] == p).length;
      this.contador.push({ palabra: palabrasSeparadas[indice], numero: a });
      this.listaPalabras.push(palabrasSeparadas[indice]);
      this.iniciarCuenta(palabrasSeparadas, ++indice);
  }
}
