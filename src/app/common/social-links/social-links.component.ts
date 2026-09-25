import { Component } from '@angular/core';

@Component({
  selector: 'app-social-links',
  imports: [],
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.scss'
})
export class SocialLinksComponent {
  linkColor: string;

  ngOnInit() {
      const rootStyles = getComputedStyle(document.documentElement);
      this.linkColor = rootStyles.getPropertyValue('--sc-accent').trim().replaceAll("#", "");
  }
}
