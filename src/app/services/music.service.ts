import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Track } from '../interfaces/media';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  loadAllTracks(): Observable<Track[]> {
    let p: Track[] = require('../../data/music.json');
    return of(p);
  }
}
