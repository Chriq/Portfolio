import { Component } from '@angular/core';
import { GalleryItem, ImageItem, GalleryComponent } from 'ng-gallery';

@Component({
  selector: 'app-lost-and-found',
  imports: [GalleryComponent],
  templateUrl: './lost-and-found.component.html',
  styleUrl: './lost-and-found.component.scss'
})
export class LostAndFoundComponent {
  screenshots: GalleryItem[] = [];
  concepts: GalleryItem[] = [];

  
  ngOnInit() {
    this.initGallery();
  }

  initGallery() {
    let screenshotPath = "lost-and-found/screenshots/";
    let conceptPath = "lost-and-found/concept-gallery/";
    
    for(let i = 1; i <= 4; i++) {
      let img = `${screenshotPath}laf-screenshot (${i}).png`;
      this.screenshots.push(new ImageItem({src: img, thumb: img}));
    }

    for(let i = 1; i <= 4; i++) {
      let img = `${conceptPath}image${i}.png`;
      this.concepts.push(new ImageItem({src: img, thumb: img}));
    }
  }
}
