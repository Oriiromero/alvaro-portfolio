import { NgModule } from '@angular/core';
import { ContactComponent } from './pages/contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutContactComponent } from './pages/layout/layout.component';

@NgModule({
    imports: [
        SharedModule
    ],
    exports: [],
    declarations: [
        ContactComponent,
        LayoutContactComponent
    ],
})
export class ContactSectionModule { }
