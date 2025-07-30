import { Component, ComponentRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../interfaces/media';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { CommonModule } from '@angular/common';
import { FlintsHintsComponent } from './flints-hints/flints-hints.component';

@Component({
  selector: 'app-project-view',
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './project-view.component.html',
  styleUrl: './project-view.component.scss'
})
export class ProjectViewComponent implements OnInit {
  constructor(
      private projectService: ProjectService,
      private router: Router
    ) {}

    project: Project;
    projectComponent;

    ngOnInit() {
      let id = this.router.url.replace("/portfolio/", "");
      this.projectService.getProjectById(id).subscribe((response) => {
        this.project = response;
        this.projectComponent = this.loadComponent(this.project.id);
      });
    }

    loadComponent(id: string) {
      let componentRef;

      switch(id) {
        case "flints-hints":
          componentRef = FlintsHintsComponent;
          break;
        default:
          componentRef = null;
          break;
      }

      return componentRef;
    }
}
