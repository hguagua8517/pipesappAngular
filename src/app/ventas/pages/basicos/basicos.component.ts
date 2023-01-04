import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower: string = 'hugo';
  nombreUpper: string = 'HUGO';
  nombreCompleto: string = 'hUgO  gUAguA';

  fecha: Date = new Date(); //el dia de hoy


  constructor() { }

  ngOnInit(): void {
  }

}
