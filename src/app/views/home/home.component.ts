import { Component } from '@angular/core';
import { MusicComponent } from "../music/music.component";
import { MatIconModule } from "@angular/material/icon";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) {}
  
  navigateTo(route: string) {
    this.router.navigate([route.toLowerCase()]);
  }
}
