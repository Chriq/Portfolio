import { Component } from '@angular/core';
import { MusicComponent } from "../music/music.component";

@Component({
  selector: 'app-home',
  imports: [MusicComponent, MusicComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
