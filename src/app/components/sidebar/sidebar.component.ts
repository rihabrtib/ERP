import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Formation',  icon: 'education_hat', class: '' },
    
    { path: '/icons', title: 'Niveau',  icon:'design_bullet-list-67', class: '' },
    { path: '/maps', title: 'Condidats',  icon:'users_single-02', class: '' },
    { path: '/notifications', title: 'Personnels',  icon:'business_badge', class: '' },

    { path: '/conge', title: 'Conge',  icon:'ui-1_calendar-60', class: '' },
    { path: '/table-list', title: 'Finance',  icon:'business_money-coins', class: '' },
    { path: '/typography', title: 'Agence',  icon:'text_caps-small', class: '' },
    { path: '/upgrade', title: 'Parteneur',  icon:'objects_spaceship', class: 'active active-pro' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
