import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  exports: [
    CommonModule,
    MenubarModule
  ]
})
export class PrimengModule { }
