import { Component, OnInit } from '@angular/core';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';


@Component({
  selector: 'app-flints-hints',
  imports: [GalleryModule],
  templateUrl: './flints-hints.component.html',
  styleUrl: './flints-hints.component.scss'
})
export class FlintsHintsComponent implements OnInit {
  gallery: GalleryItem[] = [];

  images = [
    'LivingRoom',
    'Kitchen',
    'Bowl',
    'Bedroom',
    'Bathroom',
    'FirstAid',
    'Office'
  ];

  ngOnInit() {
    this.initGallery();
  }

  initGallery() {
    let path = "flints-hints-gallery/";

    for(let fileName of this.images) {
      let img = path + fileName + '.jpg';
      this.gallery.push(new ImageItem({src: img, thumb: img}));
    }
  }
}
