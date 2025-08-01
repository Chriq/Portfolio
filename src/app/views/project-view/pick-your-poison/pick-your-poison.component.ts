import { Component, Input } from '@angular/core';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';
import { Project } from '../../../interfaces/media';

@Component({
  selector: 'app-pick-your-poison',
  imports: [ GalleryModule ],
  templateUrl: './pick-your-poison.component.html',
  styleUrl: './pick-your-poison.component.scss'
})
export class PickYourPoisonComponent {
  @Input() project: Project;
  
  gallery: GalleryItem[] = [];
  
  ngOnInit() {
    this.initGallery();
  }
  
  initGallery() {
    let path = "pick-your-poison-gallery/";
    let NUM_SCREENSHOTS = 3;

    this.gallery.push(new ImageItem({src: path + 'animation.gif', thumb: path + 'animation.gif'}));

    for(let i = 1; i <= NUM_SCREENSHOTS; i++) {
      let imgPath = path + 'pick-your-poison-' + i + '.jpg';
      this.gallery.push(new ImageItem({src: imgPath, thumb: imgPath}));
    }
  }
}
