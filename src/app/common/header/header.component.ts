import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatIconModule, MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private router: Router) {}

  menuOpen = false;

  menuOptions: string[] = [
    "Portfolio",
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
