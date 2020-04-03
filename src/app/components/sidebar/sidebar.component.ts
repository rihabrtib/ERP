import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Famille',  icon: 'education_hat', class: '' },
    
    { path: '/icons', title: 'Articles',  icon:'design_bullet-list-67', class: '' },
    { path: '/maps', title: 'Clients',  icon:'users_single-02', class: '' },
    { path: '/notifications', title: 'Fournisseurs',  icon:'business_badge', class: '' },

    { path: '/conge', title: 'Commandes',  icon:'ui-1_calendar-60', class: '' },
    
   
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
