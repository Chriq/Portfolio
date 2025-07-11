import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../interfaces/media';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { CommonModule } from '@angular/common';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-project-view',
  imports: [ CommonModule, SafeUrlPipe, GalleryModule ],
  templateUrl: './project-view.component.html',
  styleUrl: './project-view.component.scss'
})
export class ProjectViewComponent implements OnInit {
  constructor(
      private projectService: ProjectService,
      private router: Router
    ) {}

    project: Project;
    gallery: GalleryItem[];

    ngOnInit() {
      let id = this.router.url.replace("/portfolio/", "");
      this.projectService.getProjectById(id).subscribe((response) => {
        this.project = response;
        this.initGallery();
      });
    }

    initGallery() {
      let path = "flints-hints-gallery/";
      this.gallery = [
        new ImageItem({src: path + 'LivingRoom.png', thumb: path + 'LivingRoom.png'}),
        new ImageItem({src: path + 'Bathroom.png', thumb: path + 'Bathroom.png'}),
      ]
    }
}
