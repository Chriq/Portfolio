import { Component } from '@angular/core';
import { Track } from '../../interfaces/media';
import { MusicService } from '../../services/music.service';
import { MusicTrackComponent } from '../../common/music-track/music-track.component';
import { FilterComponent } from "./filter/filter.component";
import { MatDividerModule } from "@angular/material/divider";

@Component({
  selector: 'app-music',
  imports: [
    MusicTrackComponent,
    FilterComponent,
    MatDividerModule
],
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss'
})
export class MusicComponent {
  constructor(
    private musicService: MusicService
  ) {}

  allTracks: Track[];
  displayedTracks: Track[];
  featuredTracks: Track[];
  tags: string[];

  ngOnInit() {
    this.musicService.loadAllTracks().subscribe((result) => {
      this.allTracks = result;
      this.updateDisplayedTracks([]);
      this.featuredTracks = result.filter((track) => { return track.featured });
      this.buildTagsList(result);
    });
  }

  buildTagsList(tracks: Track[]) {
    let tagSet = new Set<string>();
    for(let track of tracks) {
      for(let tag of track.tags) {
        tagSet.add(tag);
      }
    }

    this.tags = [...tagSet].sort();
  }

  updateDisplayedTracks(selectedTags: string[]) {
    let tracks = this.allTracks;
    if(selectedTags.length > 0) {
      tracks = this.allTracks
      .filter((track) => {
        return selectedTags.some((selected) => {
          return track.tags.some((trackTag) => trackTag === selected);
        });
      })
    }

    this.displayedTracks = tracks.sort((track1, track2) => {
      let t1 = new Date(track1.releaseDate).getTime();
      let t2 = new Date(track2.releaseDate).getTime();

      return t2 - t1;
    });
  }
}
