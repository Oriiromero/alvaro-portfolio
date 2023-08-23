import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainRoutingModule } from '../main/main-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        MainRoutingModule
    ],
    exports: [
        NavbarComponent
    ],
    declarations: [
        NavbarComponent
    ]
})
export class SharedModule { }
