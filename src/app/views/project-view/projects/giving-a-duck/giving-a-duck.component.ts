import { Component } from '@angular/core';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-giving-a-duck',
  imports: [ GalleryModule ],
  templateUrl: './giving-a-duck.component.html',
  styleUrl: './giving-a-duck.component.scss'
})
export class GivingADuckComponent {
  gallery: GalleryItem[] = [];
  
  ngOnInit() {
    this.initGallery();
  }
  
  initGallery() {
    let path = "giving-a-duck-gallery/";
    let NUM_SCREENSHOTS = 4;

    for(let i = 1; i <= NUM_SCREENSHOTS; i++) {
      let imgPath = path + 'giving-a-duck (' + i + ').jpg';
      this.gallery.push(new ImageItem({src: imgPath, thumb: imgPath}));
    }
  }
}
