import { Component } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public items = [
    {name: 'Home', url: '/home'},
    {name: 'Experience', url: '/home'},
    {name: 'Projects', url: '/home'},
    {name: 'Contact', url: '/contact'},
  ];

  public id: string = '';
  public isToggle: boolean = false;

  activateLink = (id: string) => {
    this.id = id;
  }

  activateLinkMobile(id: string) {
    this.id = id;
    this.isToggle = false;
  }

  toggleMenu(): void {

    this.isToggle = !this.isToggle

    console.log(this.isToggle)
  }
 
}
