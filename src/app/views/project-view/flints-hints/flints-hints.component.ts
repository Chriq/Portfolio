import { Component, OnInit } from '@angular/core';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';


@Component({
  selector: 'app-flints-hints',
  imports: [GalleryModule],
  templateUrl: './flints-hints.component.html',
  styleUrl: './flints-hints.component.scss'
})
export class FlintsHintsComponent implements OnInit {
  gallery: GalleryItem[];

  ngOnInit() {
    this.initGallery();
  }

  initGallery() {
    let path = "flints-hints-gallery/";
    this.gallery = [
      new ImageItem({src: path + 'LivingRoom.png', thumb: path + 'LivingRoom.png'}),
      new ImageItem({src: path + 'Bathroom.png', thumb: path + 'Bathroom.png'}),
    ]
  }
}
