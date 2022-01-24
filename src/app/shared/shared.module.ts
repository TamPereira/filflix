import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SspPipe } from './pipes/ssp/ssp.pipe';



@NgModule({
  declarations: [
    SspPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SspPipe
  ]
})
export class SharedModule { }
