import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact-section/pages/contact/contact.component';
import { LayoutComponent } from './main/layout/layout.component';
import { LayoutContactComponent } from './contact-section/pages/layout/layout.component';


const routes: Routes = [
  {
    path: 'home',
    component: LayoutComponent
  },
  {
    path: 'contact',
    component: LayoutContactComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
