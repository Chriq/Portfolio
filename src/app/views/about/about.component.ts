import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  mailto: string = "&#x6d;&#x61;&#x69;&#x6c;&#x74;&#x6f;&colon;&#x63;&#x68;&#x72;&#x69;&#x73;&#x74;&#x69;&#x61;&#x6e;&#x63;&#x6f;&#x6f;&#x6b;&#x35;&#x32;&commat;&#x67;&#x6d;&#x61;&#x69;&#x6c;&period;&#x63;&#x6f;&#x6d;"
}
