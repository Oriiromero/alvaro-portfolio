import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule
    ],
    exports: [],
    declarations: [
        HomeComponent,
        ExperienceComponent,
        ProjectsComponent,
        LayoutComponent
    ]
})
export class MainModule { }
