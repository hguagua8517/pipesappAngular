import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
cambiarNombre() {

  console.log(this.nombre);
  console.log(this.valor);
  console.log(this.obj);
}

  nombre: string = 'hUGo guAGua';
  valor: number= 1000;
  obj = {
    nombre: 'hugo guagua'
  }
  title = 'pipesApp';


}
