import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrimengModule } from '../PrimeNg/primeng.module';

@NgModule({
    imports: [
        PrimengModule
    ],
    exports: [
        NavbarComponent
    ],
    declarations: [
        NavbarComponent
    ]
})
export class SharedModule { }
