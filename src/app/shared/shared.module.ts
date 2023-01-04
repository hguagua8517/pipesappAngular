import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamenuComponent } from './samenu/samenu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    SamenuComponent
  ],
  exports:[
    SamenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SharedModule { }
