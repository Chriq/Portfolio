import { Component, ComponentRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../interfaces/media';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { CommonModule } from '@angular/common';
import { FlintsHintsComponent } from './flints-hints/flints-hints.component';
import { PickYourPoisonComponent } from './pick-your-poison/pick-your-poison.component';
import { GivingADuckComponent } from './giving-a-duck/giving-a-duck.component';
import { TheBoysComponent } from './the-boys/the-boys.component';
import { LostAndFoundComponent } from './lost-and-found/lost-and-found.component';
import { GardenComponent } from './garden/garden.component';
import { CastawaysComponent } from './castaways/castaways.component';
import { DownTheCountComponent } from './down-the-count/down-the-count.component';
import { ColdCallComponent } from './cold-call/cold-call.component';
import { ProjectSummaryComponent } from './project-summary/project-summary.component';

@Component({
  selector: 'app-project-view',
  imports: [CommonModule, SafeUrlPipe, ProjectSummaryComponent],
  templateUrl: './project-view.component.html',
  styleUrl: './project-view.component.scss'
})
export class ProjectViewComponent implements OnInit {
  constructor(
      private projectService: ProjectService,
      private router: Router,
      private route: ActivatedRoute
    ) {}

    project: Project;
    projectComponent;

    ngOnInit() {
      let id = this.router.url.replace("/games/", "");
      this.initProject(id);

      this.route.params.subscribe(
        params => {
          const projectId = params['name'];
          this.initProject(projectId);
        }
      );
    }

    initProject(projectId: string) {
      this.projectService.getProjectById(projectId).subscribe((response) => {
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
        case "pick-your-poison":
          componentRef = PickYourPoisonComponent;
          break;
        case "giving-a-duck":
          componentRef = GivingADuckComponent;
          break;
        case "the-boys":
          componentRef = TheBoysComponent;
          break;
        case "lost-and-found":
          componentRef = LostAndFoundComponent;
          break;
        case "garden-lost-in-time":
          componentRef = GardenComponent;
          break;
        case "last-call-at-castaways":
          componentRef = CastawaysComponent;
          break;
        case "down-the-count":
          componentRef = DownTheCountComponent;
          break;
        case "cold-call":
          componentRef = ColdCallComponent;
          break;
        default:
          componentRef = null;
          break;
      }

      return componentRef;
    }
}
