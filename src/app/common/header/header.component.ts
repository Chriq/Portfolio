import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SocialLinksComponent } from "../social-links/social-links.component";


@Component({
  selector: 'app-header',
  imports: [MatSidenavModule, MatIconModule, MatToolbarModule, SocialLinksComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private router: Router) {}

  menuOpen = false;

  // menuOptions: string[] = [
  //   "Portfolio",
  //   "Resume",
  //   "About",
  //   "Contact"
  // ];

  menuOptions: string[] = [
    "Home",
    "Music",
    "Games",
    "About",
    "Contact"
  ];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  navigateTo(route: string) {
    this.router.navigate([route.toLowerCase()]);
  }
}
