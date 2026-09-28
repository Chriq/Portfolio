import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-cold-call',
  imports: [MatExpansionModule],
  templateUrl: './cold-call.component.html',
  styleUrl: './cold-call.component.scss'
})
export class ColdCallComponent {
panelOpenState = false;
}
