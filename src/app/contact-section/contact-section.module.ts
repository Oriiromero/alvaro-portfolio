import { NgModule } from '@angular/core';
import { ContactComponent } from './pages/contact/contact.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule
    ],
    exports: [],
    declarations: [
        ContactComponent,
    ],
})
export class ContactSectionModule { }
