import { Component } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public items = [
    {name: 'Home', url: 'home'},
    {name: 'Experience', url: 'experience'},
    {name: 'Projects', url: 'projects'},
    {name: 'Contact', url: '/contact'},
  ];

  public id: string = '';

  activateLink = (id: string) => {
    this.id = id;
  }
}
