import { Component, Input, OnInit } from '@angular/core';
import { Track } from '../../interfaces/media';
import { SafeUrlPipe } from "../../pipes/safe-url.pipe";


@Component({
  selector: 'app-music-track',
  imports: [SafeUrlPipe],
  templateUrl: './music-track.component.html',
  styleUrl: './music-track.component.scss'
})
export class MusicTrackComponent {

  @Input() track: Track;

  constructor() {}

  ngOnInit() {
    console.log(this.track);
  }

}
