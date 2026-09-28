import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ProjectService } from '../../../services/project.service';
import { map } from 'rxjs';
import { Project } from '../../../interfaces/media';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-carousel',
  imports: [MatIconModule],
  templateUrl: './project-carousel.component.html',
  styleUrl: './project-carousel.component.scss'
})
export class ProjectCarouselComponent implements OnInit {
  @Input() currentProjectId: string;

  previousProject: Project;
  nextProject: Project;
  
  constructor(
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        const projectId = params['name'];
        this.initCarousel(projectId);
      }
    );

    this.initCarousel(this.currentProjectId);
  }

  initCarousel(projectId: string) {
    this.previousProject = null;
    this.nextProject = null;

    this.projectService.loadAllProjects().subscribe((pList) => {
      const currentIndex = pList.findIndex((p) => projectId === p.id);
      if(currentIndex - 1 >= 0) {
        this.previousProject = pList[currentIndex - 1];
      }

      if(currentIndex + 1 < pList.length) {
        this.nextProject = pList[currentIndex + 1];
      }
    })
  }

  goTo(projectId: string) {
    this.router.navigate(['games/', projectId]);
  }
}
