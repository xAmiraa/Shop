import { Component, OnInit, Inject, Renderer2, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

import { MENU } from './menu';
import { MenuItem } from './menu.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuItems = [];

  /**
  * Fixed header menu on scroll
  */
  @HostListener('window:scroll', ['$event']) getScrollHeight(event) {    
    if (window.matchMedia('(min-width: 992px)').matches) {
      let header: HTMLElement = document.querySelector('.horizontal-menu') as HTMLElement;
      if(window.pageYOffset >= 60) {
        header.parentElement.classList.add('fixed-on-scroll')
      } else {
        header.parentElement.classList.remove('fixed-on-scroll')
      }
    }
  }

  constructor(
    @Inject(DOCUMENT) private document: Document, 
    private renderer: Renderer2,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.menuItems = MENU;

    /**
    * closing the header menu after route change in tablet/mobile devices
    */
    if (window.matchMedia('(max-width: 991px)').matches) {
      this.router.events.forEach((event) => {
        if (event instanceof NavigationEnd) {
          document.querySelector('.horizontal-menu .bottom-navbar').classList.remove('header-toggled');
        }
      });
    }
  }

  /**
   * Returns true or false if given menu item has child or not
   * @param item menuItem
   */
  hasItems(item: MenuItem) {
    return item.subMenus !== undefined ? item.subMenus.length > 0 : false;
  }

  /**
   * Logout
   */
  logout() {
    this.authService.logout();
  }

  /**
   * Toggle header menu in tablet/mobile devices
   */
  toggleHeaderMenu() {
    document.querySelector('.horizontal-menu .bottom-navbar').classList.toggle('header-toggled');
  }

}
