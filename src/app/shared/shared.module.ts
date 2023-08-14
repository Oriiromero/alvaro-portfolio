import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrimengModule } from '../PrimeNg/primeng.module';
import { MainRoutingModule } from '../main/main-routing.module';

@NgModule({
    imports: [
        PrimengModule,
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
