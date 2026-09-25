import { Component, Input } from '@angular/core';
import { ProjectSummary } from '../../../interfaces/media';

@Component({
  selector: 'app-project-summary',
  imports: [],
  templateUrl: './project-summary.component.html',
  styleUrl: './project-summary.component.scss'
})
export class ProjectSummaryComponent {
  @Input() summary: ProjectSummary;
}
