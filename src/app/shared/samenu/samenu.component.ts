import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-samenu',
  templateUrl: './samenu.component.html',
  styles: [
  ]
})
export class SamenuComponent implements OnInit {
  items: MenuItem[]= [];
  constructor() { }

  ngOnInit(): void {
    this.items = [{
      label: 'Pipes de Angular',
      icon: 'pi pi-desktop',
      items:[
        {
          label: 'Textos y Fechas',
          icon: 'pi pi-align-left',
          routerLink: '/'
        },
        {
          label: 'Números',
          icon: 'pi pi-dollar',
          routerLink: 'numeros'
        },
        {
          label: 'No comunes',
          icon: 'pi pi-globe',
          routerLink: 'nocomunes'
        }
      ]
  },
  {
    label: 'Pipes personalizados',
    icon: 'pi pi-cog'
  }
];
}
}


